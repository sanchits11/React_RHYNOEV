import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import '../CSS/Navbar.css';
import logo from '../Images/logo.png'; // Ensure the correct path to your image

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen) {
            setDropdownOpen(false); // Close dropdown if menu is closed
        }
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    const toggleDropdown = (e) => {
        e.preventDefault(); // Prevent default link behavior
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <nav className='main-nav'>
                <Helmet>
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
                </Helmet>
                <div className='logo'>
                    <img src={logo} alt='Logo' />
                </div>
                <div className='hamburger' onClick={handleMenuToggle}>
                    <FaBars />
                </div>
                <div className={`menu-link ${menuOpen ? 'active' : ''}`}>
                    <div className='cancel' onClick={handleMenuClose}>
                        <FaTimes />
                    </div>
                    <ul>
                        <li>
                            <Link to="/" onClick={handleMenuClose}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={handleMenuClose}>About</Link>
                        </li>
                        <li className='dropdown'>
                            <a href='#' onClick={toggleDropdown}>Products</a>
                            {dropdownOpen && (
                                <div className='dropdown-content'>
                                    <Link to="/se03-lite" onClick={handleMenuClose}>SE03 Lite</Link>
                                    <Link to="/se03" onClick={handleMenuClose}>SE03</Link>
                                    <Link to="/se03-max" onClick={handleMenuClose}>SE03 Max</Link>
                                    <Link to="/comparison" onClick={handleMenuClose}>Compare all</Link>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link to="/contact" onClick={handleMenuClose}>Contact us</Link>
                        </li>
                        <li>
                            <Link to="/prebook-form" onClick={handleMenuClose}>Pre-book now</Link>
                        </li>
                    </ul>
                    <div className="social-media-mobile">
                        <ul>
                            <li>
                                <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/rhyno.in/' target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/company/rhyno-wheels/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="social-media">
                    <ul className="list">
                        <li>
                            <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/rhyno.in' target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/company/rhyno-wheels/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Conditionally render the menu-overlay */}
            {menuOpen && <div className="menu-overlay" onClick={handleMenuClose}></div>}
        </>
    );
};

export default Navbar;
