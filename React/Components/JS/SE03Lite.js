import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Product.css';
import red from '../Images/red.png'
import black from '../Images/black.png'
import blue from '../Images/blue.png';

function SE03Lite() {
    const imagesRef = useRef([]);
    let currentImageIndex = 0;
    const navigate = useNavigate();

    useEffect(() => {
        const images = imagesRef.current;
        const totalImages = images.length;

        function showNextImage() {
            images[currentImageIndex].style.opacity = 0;
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            images[currentImageIndex].style.opacity = 1;
        }

        const interval = setInterval(showNextImage, 3000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const handlePreBook = () => {
        const productName = 'SE03 Lite'; // Replace with the actual product name if dynamic
        navigate('/prebook-form', { state: { productName } });
    }

    return (
        <div className="product-container">
            <div className="carousel-division">
                <div className="carousel">
                    <div className="carousel-images">
                        <img ref={(el) => imagesRef.current[0] = el} src={black} alt="Product Image 1" style={{ opacity: 1 }} />
                        <img ref={(el) => imagesRef.current[1] = el} src={red} alt="Product Image 2" style={{ opacity: 0 }} />
                        <img ref={(el) => imagesRef.current[2] = el} src={blue} alt="Product Image 3" style={{ opacity: 0 }} />
                    </div>
                </div>
            </div>
            <div className="details-division">
                <h1>SE03 Lite</h1>
                {/* <div className="reviews">
                    <span className="review-count">0 reviews</span>
                </div> */}
                <hr />
                <div className="price">
                    <span>&#8377; 30000</span>
                    {/* <span className="old-price">$YY.YY</span> */}
                </div>
                <div className="product-description">
                    <p>Experience unmatched power and range with the Rhyno. Equipped with a robust 2000W motor, it offers an exhilarating ride and a range of 80-100 km on a single charge. Featuring a fire-safe advanced LFP battery and a powerful 2.7kWh battery, the Rhyno delivers a thrilling and safe journey. Discover the detailed specs below!</p>
                </div>
                <div className="availability">
                    <span>In Stock.</span>
                </div>
                <div className="color-selection">
                    <label htmlFor="color-options">Select Color:</label>
                    <div className="color-options">
                        <input type="radio" id="color-black" name="color" value="black" className="color-radio" defaultChecked />
                        <label htmlFor="color-black" className="color-swatch"></label>
                        
                        <input type="radio" id="color-red" name="color" value="red" className="color-radio" />
                        <label htmlFor="color-red" className="color-swatch"></label>
                        
                        <input type="radio" id="color-blue" name="color" value="blue" className="color-radio" />
                        <label htmlFor="color-blue" className="color-swatch"></label>
                    </div>
                </div>
                <button onClick={handlePreBook} className="buy-now">Pre-book</button>
            </div>
            <div className="features-division">
                <h2>Product Features:</h2>
                <table className="product-details">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Battery</td>
                            <td>1.8Kwh</td>
                        </tr>
                        <tr>
                            <td>Max range (@ full speed)</td>
                            <td>70 km</td>
                        </tr>
                        <tr>
                            <td>Motor</td>
                            <td>1500W</td>
                        </tr>
                        <tr>
                            <td>Charging time</td>
                            <td>3 hours (12A)</td>
                        </tr>
                        <tr>
                            <td>Max speed</td>
                            <td>50 km/h</td>
                        </tr>
                        <tr>
                            <td>Battery features</td>
                            <td>LFP with 1500 cycles. Active Balancing. Waterproof (IP67)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SE03Lite;
