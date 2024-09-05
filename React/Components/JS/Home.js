import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/home.css';

// Import your vehicle images
import vehicle1 from '../Images/red.png';
import vehicle2 from '../Images/black.png';
import vehicle3 from '../Images/blue.png';
// import vehicle4 from '../Images/rhyno.png';

// For USP
import LFP from '../Images/LFP.jpg'
import RangePredictor from '../Images/RangePredictor.jpeg'
import EnE from '../Images/E&E.jpeg'
import RnS from '../Images/Durable.jpg'

function Home() {
    const [currentWord, setCurrentWord] = useState('Elegance');
    const words = ['Elegance', 'Minimalism', 'Comfort'];
    const [currentDiv, setCurrentDiv] = useState(0);
    const carouselDivs = [
        {
            image: LFP,
            description: "Rhyno features Lithium Iron Phosphate (LFP) batteries known for their superior safety, wider temperature range, and durability. They eliminate fire risks associated with other lithium batteries and come with an Active Balancing Smart Battery Management System for longer life and low maintenance. Each battery is rigorously waterproofed to IP76 standards. Explore the advanced engineering that ensures the durability of our batteries!"
        },
        {
            image: vehicle2,
            description: "The Rhyno features innovative 9.5-inch wider tires that enhance stability and prevent skidding. Designed for various terrains, including wet roads, mud, and sand, these tires ensure safe and confident leaning turns."
        },
        {
            image: RangePredictor,
            description: "Rhyno eliminates range anxiety with its precise battery range prediction feature, ensuring you always know how much distance you can cover before needing a charge."
        },
        {
            image: EnE,
            description:"Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamiess fusion of minimalism, sophistication, and a touch of masculinity!"
        },
        {
            image: RnS,
            description:"Rhyno features a rugged, straightforward design, breaking away from the fragile and often problematic EVs of the past. Built for durability and simplicity, it’s designed to withstand minor accidents and is easy for local mechanics to repair. Experience its resilience firsthand—click here to find a dealership or book a test ride at home!"
        }
    ];

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setCurrentWord(prev => {
                const index = words.indexOf(prev);
                return words[(index + 1) % words.length];
            });
        }, 3000); // Change every 3 seconds

        const divInterval = setInterval(() => {
            setCurrentDiv(prev => (prev + 1) % carouselDivs.length);
        }, 3000); // Change every 4 seconds

        return () => {
            clearInterval(wordInterval);
            clearInterval(divInterval);
        };
    }, [words, carouselDivs.length]);

    const navigate = useNavigate();

    const handlePrebookClick = () => {
        navigate('/prebook-form'); // Redirect to the prebook page
    };

    return (
        <div className="home-container">
            <div className="hero-section">
                <h1>
                    Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets{' '}
                    <span className="dynamic-word">{currentWord}</span>.
                </h1>
            </div>
            <div className="collage-section">
                <h2>Explore Our Vehicles</h2>
                <div className="collage">
                    <img src={vehicle1} alt="Vehicle 1" className="collage-image" />
                    <img src={vehicle2} alt="Vehicle 2" className="collage-image" />
                    <img src={vehicle3} alt="Vehicle 3" className="collage-image" />
                </div>
                <Link to="/comparison" className="checkout-button">
                    Check Out
                </Link>
            </div>
            <div className="carousel-section">
                {/* <h2>Information Carousel</h2> */}
                <div className="carousel-container">
                    <div
                        className="carousel-wrapper"
                        style={{ transform: `translateX(-${currentDiv * 100}%)` }}
                    >
                        {carouselDivs.map((item, index) => (
                            <div
                                key={index}
                                className="carousel-item"
                            >
                                <img src={item.image} alt={`Vehicle ${index + 1}`} className="carousel-image" />
                                <p className="carousel-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="floating-prebook-button" onClick={handlePrebookClick}>
                Prebook
            </div>
        </div>
    );
}

export default Home;
