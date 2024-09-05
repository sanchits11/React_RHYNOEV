import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/JS/Navbar';
import Home from './Components/JS/Home';
import About from './Components/JS/About';
import Contact from './Components/JS/Contact';
import ProductComparison from './Components/JS/ProductComparison';
// import PreBook from './Components/JS/PreBook';
import PreBookForm from './Components/JS/Form';
import SE03Lite from './Components/JS/SE03Lite';
import SE03 from './Components/JS/SE03';
import SE03Max from './Components/JS/SE03Max';
import Footer from './Components/JS/Footer';
import ThankYou from './Components/JS/Thankyou';
import Rentals from './Components/JS/Rentals';
import './App.css'; // Assuming you have some global styles

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/comparison" element={<ProductComparison />} />
                    {/* <Route path="/pre-book" element={<PreBook />} /> */}
                    <Route path="/prebook-form" element={<PreBookForm />} />
                    <Route path="/rentals" element={<Rentals/>} />
                    <Route path="/thankyou" element={<ThankYou />} />
                    <Route path="/se03-lite" element={<SE03Lite />} />
                    <Route path="/se03" element={<SE03 />} />
                    <Route path="/se03-max" element={<SE03Max />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
