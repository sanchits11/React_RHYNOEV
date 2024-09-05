import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Product.css';
import red from '../Images/red.png'
import black from '../Images/black.png'
import blue from '../Images/blue.png';

function ProductPage() {
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
        const productName = 'SE03 Max'; // Replace with the actual product name if dynamic
        navigate('/prebook-form', { state: { productName } });
    };

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
                <h1>SE03 Max</h1>
                {/* <div className="reviews">
                    <span className="review-count">0 reviews</span>
                </div> */}
                <hr />
                <div className="price">
                    <span>&#8377; 50000</span>
                    {/* <span className="old-price">$YY.YY</span> */}
                </div>
                <div className="product-description">
                    <p>Experience the Rhyno's perfect blend of power and range. With a 2000W motor, it offers a thrilling ride and an 80-100 km range on a single charge. Its fire-safe LFP battery ensures safety, while the 2.7kWh battery and robust motor provide an electrifying journey. Explore the detailed specs below!</p>
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
                            <td>2.7Kwh</td>
                        </tr>
                        <tr>
                            <td>Max range (@ full speed)</td>
                            <td> km</td>
                        </tr>
                        <tr>
                            <td>Motor</td>
                            <td>1500W</td>
                        </tr>
                        <tr>
                            <td>Charging time</td>
                            <td>4 hours (12A)</td>
                        </tr>
                        <tr>
                            <td>Max speed</td>
                            <td>55 km/h</td>
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

export default ProductPage;
