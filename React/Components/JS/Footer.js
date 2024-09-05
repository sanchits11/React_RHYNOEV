import React from 'react';
import '../CSS/Footer.css'; // Assuming you will add some styles
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-sections">
                <div className="footer-section">
                    <h3>Policies:</h3>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Refund Policy</a>
                    <a href="/">Website Policy</a>
                </div>
                <div className="footer-section">
                    <h3>Contact & Career:</h3>
                    <a href="/contact">Contact Us</a>
                    <a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">Career</a>
                </div>
                <div className="footer-section">
                    <h3>Products & Rentals:</h3>
                    <a href="/comparison">Products</a>
                    <a href="/rentals">Rentals</a>
                </div>
                <div className="footer-social">
                    <h3>Social Media:</h3>
                    <div className="footer-icons">
                        <a href="https://www.instagram.com/rhyno.in/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
