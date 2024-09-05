import React, { useState, useEffect } from 'react';
import '../CSS/Carousel.css';

const carouselItems = [
    {
        title: 'LFP Battery',
        description: `Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
        renowned for their safety features—eliminating the risk of fire associated with other
        Lithium batteries. These batteries boast a broader temperature range, ideal for the
        diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
        by an Active Balancing Smart Battery Management System (BMS) for extended life
        and reduced maintenance. Each battery undergoes rigorous waterproofing tests
        according to IP76 standards. But it doesn't stop there—our technology goes the extra
        mile in ensuring the battery's lasting durability. Connect with us to discover the
        thoughtful engineering behind our batteries!`
    },
    {
        title: 'Wider Tyres',
        description: `Now, say goodbye to skidding and embrace the leaning turns!
        Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
        beast that ensures stability on different terrains such as wet roads, mud, and sand.`
    },
    {
        title: 'Range Prediction',
        description: `Many budget-friendly electric scooters overlook this crucial
        feature, causing riders to experience range anxiety. With Rhyno, you can ride with
        peace of mind, thanks to the scooter providing precise information about the
        remaining battery.`
    }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel">
                {carouselItems.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    >
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
