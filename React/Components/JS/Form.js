import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../CSS/Form.css';

function PreBookForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        city: '',
        ev: location.state?.productName || ''
    });

    const productPrices = {
        "SE03": 40000, // Amount in paise (₹5000)
        "SE03 Lite": 30000, // Amount in paise (₹3000)
        "SE03 Max": 50000 // Amount in paise (₹7000)
    };

    useEffect(() => {
        if (location.state && location.state.ev) {
            setFormData((prevData) => ({
                ...prevData,
                ev: location.state.ev
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const paymentHandler = async (e) => {
        e.preventDefault();
    
        if (!formData.name || !formData.email || !formData.mobile || !formData.city || !formData.ev) {
            alert('Please fill out all fields.');
            return;
        }
    
        try {
            const amount = productPrices[formData.ev]; // Amount in paise
            console.log("Break 1")
            const orderResponse = await fetch('http://localhost:5000/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: amount,
                    currency: 'INR',
                    receipt: `receipt_${Date.now()}`,
                    payment_capture: 1
                })
            });
            console.log("Break2");
    
            if (!orderResponse.ok) {
                throw new Error('Failed to create order');
            }
            console.log("Break3");
    
            const orderData = await orderResponse.json();
            console.log("Break4");
            const options = {
                key: 'rzp_test_bFDZkJrz0HoShn',
                amount: orderData.amount,
                currency: orderData.currency,
                name: "EV E-Commerce",
                description: `Pre-booking for ${formData.ev}`,
                order_id: orderData.id,
                handler: async function (response) {
                    try {
                        console.log("Break 5");
                        
                        const captureResponse = await fetch('http://localhost:5000/capture-payment', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                payment_id: response.razorpay_payment_id,
                                amount: orderData.amount / 100, // Convert from paise to rupees
                                email: formData.email
                            })
                        });
    
                        if (!captureResponse.ok) {
                            throw new Error('Failed to capture payment');
                        }
    
                        console.log("Payment Successful");
                        alert("Your payment was successful and Receipt has been sent to your email id.");
                        navigate("/")
                    } catch (error) {
                        console.error('Payment capture failed', error);
                        alert('Payment capture failed. Please try again.');
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                    contact: formData.mobile
                },
                theme: {
                    color: "#F37254"
                }
            };
    
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error('Payment process failed', error);
            alert('Payment process failed. Please try again.');
        }
    };

    return (
        <div className="prebook-form-container">
            <h2>Pre-Book Your EV</h2>
            <form onSubmit={paymentHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <select id="city" name="city" value={formData.city} onChange={handleChange} required>
                        <option value="">Choose City</option>
                        <option value="city1">Gujarat</option>
                        <option value="city2">Pune</option>
                        <option value="city3">Bangalore</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="ev">EV:</label>
                    <select id="ev" name="ev" value={formData.ev} onChange={handleChange} required>
                        <option value="">Choose EV</option>
                        <option value="SE03">SE03</option>
                        <option value="SE03 Lite">SE03 Lite</option>
                        <option value="SE03 Max">SE03 Max</option>
                    </select>
                </div>
                <button type="submit" className="pay-now">Pay Now</button>
            </form>
        </div>
    );
}

export default PreBookForm;
