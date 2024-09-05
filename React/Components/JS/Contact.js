import React from 'react';
import '../CSS/Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Us:</h1>
            <div className="contact-details">
                <p><strong>Mail:</strong> <a href="mailto:info@rhyno.in">info@rhyno.in</a></p>
                <p><strong>Mobile no.:</strong> <a href="tel:+919023987528">+91-9023987528</a></p>
                <p><strong>Location:</strong> Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India</p>
                <div className="map-container">
                    <iframe 
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14561.98781710641!2d73.09997387985893!3d23.09038044660437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8412e4a3a5d7%3A0x8a1a23d8bb3d28d5!2sPandit%20Deendayal%20Energy%20University!5e0!3m2!1sen!2sin!4v1693654601791!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
