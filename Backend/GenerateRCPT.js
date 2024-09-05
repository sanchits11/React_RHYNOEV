const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const receiptsDir = path.join(__dirname, 'receipts');

if (!fs.existsSync(receiptsDir)) {
    fs.mkdirSync(receiptsDir);
}

function generateReceipt(paymentDetails) {
    const doc = new PDFDocument({ margin: 50 });
    const receiptsDir = path.join(__dirname, 'receipts');
    if (!fs.existsSync(receiptsDir)) {
        fs.mkdirSync(receiptsDir);
    }
    const receiptPath = path.join(receiptsDir, `receipt_${paymentDetails.id}.pdf`);
    const writeStream = fs.createWriteStream(receiptPath);

    doc.pipe(writeStream);

    // Add Company Logo
    doc.image('path/logo.png', {
        width: 100,
        align: 'center',
        valign: 'center'
    }).moveDown();

    // Add Header
    doc
        .fontSize(20)
        .text('Payment Receipt', {
            align: 'center'
        })
        .moveDown(1.5);

    // Add Payment Details
    doc
        .fontSize(12)
        .text(`Payment ID: ${paymentDetails.id}`, {
            align: 'center'
        })
        .moveDown(0.5)
        .text(`Order ID: ${paymentDetails.order_id}`, {
            align: 'center'
        })
        .moveDown(0.5)
        .text(`Amount: ₹${(paymentDetails.amount / 100).toFixed(2)}`, {
            align: 'center'
        })
        .moveDown(0.5)
        .text(`Status: ${paymentDetails.status}`, {
            align: 'center'
        })
        .moveDown(1.5);

    // Add Custom Design Elements
    doc
        .fontSize(15)
        .text('Company Name', {
            align: 'center'
        })
        .moveDown(0.5)
        .fontSize(10)
        .text('Address Line 1', {
            align: 'center'
        })
        .moveDown(0.5)
        .text('Address Line 2', {
            align: 'center'
        })
        .moveDown(0.5)
        .text('City, State ZIP Code', {
            align: 'center'
        })
        .moveDown(0.5)
        .text('Email: example@company.com', {
            align: 'center'
        })
        .moveDown(1.5);

    // Add Footer
    doc
        .fontSize(10)
        .text('Thank you for your payment!', {
            align: 'center'
        });

    doc.end();

    return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            console.log(`Receipt generated at ${receiptPath}`);  // Log path for debugging
            resolve(receiptPath);
        });
        writeStream.on('error', reject);
    });
}

module.exports = generateReceipt;


