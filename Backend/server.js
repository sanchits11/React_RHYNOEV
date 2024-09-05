const express = require('express');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');
const nodemailer = require('nodemailer');
const path = require('path');
const generateReceipt = require('./GenerateRCPT');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Replace these with your Razorpay key_id and key_secret
const razorpay = new Razorpay({
    key_id: 'rzp_test_bFDZkJrz0HoShn',
    key_secret: 'Fymnt5H0XFn93HgjFoUehF2p'
});

app.use(bodyParser.json());
app.use(express.static('public'));

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sskkrs11@gmail.com',
        pass: 'bert rczo nvnw bvhz'
    }
});

function sendEmail(receiptPath, email) {
    const mailOptions = {
        from: 'sskkrs11@gmail.com',
        to: email,
        subject: 'Payment Receipt',
        text: 'Please find attached your payment receipt.',
        attachments: [
            {
                filename: 'receipt.pdf',
                path: receiptPath
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email: ', error);
            return;
        }
        console.log('Email sent: ' + info.response);

        // Clean up the generated PDF file
        fs.unlink(receiptPath, (err) => {
            if (err) console.log('Error deleting file: ', err);
        });
    });
}


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post('/create-order', async (req, res) => {
    const options = {
        amount: req.body.amount * 100, // amount in the smallest currency unit
        currency: 'INR',
        receipt: 'receipt#1',
        payment_capture: 1
    };

    try {
        const response = await razorpay.orders.create(options);
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        });
    } catch (error) {
        console.error('Error creating order: ', error);
        res.status(500).send('Something went wrong while creating the order');
    }
});

app.post('/capture-payment', async (req, res) => {
    const { payment_id, amount, email } = req.body;

    try {
        const payment = await razorpay.payments.fetch(payment_id);

        if (payment.status === 'captured') {
            console.log('Payment already captured');
            const receiptPath = await generateReceipt(payment);
            sendEmail(receiptPath, email);
            return res.json(payment);
        }

        const response = await razorpay.payments.capture(payment_id, amount * 100);
        const receiptPath = await generateReceipt(response);
        sendEmail(receiptPath, email);
        res.json(response);
    } catch (error) {
        console.error('Error capturing payment: ', error.message);
        console.error('Full Error:', error);
        res.status(500).send('Something went wrong while capturing the payment');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
