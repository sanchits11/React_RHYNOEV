// src/components/ThankYou.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Thankyou.css'; // Optional: Add styling for the Thank You page

const ThankYou = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/'); // Redirect to the home page or any other page you prefer
    };

    return (
        <div className="thank-you-container">
            <h2>Thank You!</h2>
            <p>Your payment has been successfully processed.</p>
            <p>We appreciate your order and will get in touch with you soon.</p>
            <button onClick={handleHomeClick} className="home-button">Go to Home</button>
        </div>
    );
};

export default ThankYou;
