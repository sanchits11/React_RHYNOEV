import React, { useEffect } from 'react';
import '../CSS/compare.css'; // Make sure to create and update your CSS here
import red from '../Images/red.png';
import se03 from '../Images/se03.png';
import black from '../Images/black.png';
import { Helmet } from "react-helmet";
import $ from 'jquery';
import { Link } from 'react-router-dom';

const ComparisonTable = () => {
  useEffect(() => {
    $('li').hover(function() {
      $(this).addClass('active');
      $(this).children('h1').addClass('active');
    });

    $('li').mouseleave(function() {
      $(this).removeClass('active');
      $(this).children('h1').removeClass('active');
    });
  }, []);

  return (
    <div className="comparisonTable">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <ul className="comparison_table">
        <li>
          <h1>SE03</h1>
          <div className="tcircle">
            <div className="product_image">
              <img className="product_image" src={black} alt="header image" />
            </div>
          </div>
          <div className="tlist">
            <ul>
              <li>Battery: 1.8Kwh</li>
              <li>Battery warranty: 3 years</li>
              <li>Charging time: 3 hours(12A)</li>
              <li>Motor: 1500W</li>
              <li>Max speed: 55 km/h</li>
              <li>Max range(@30km/h): 100km</li>
              <li>Max range(@30km/h): 90km</li>
              <li>Max range(@30km/h): 60km</li>
              <li>Other Key benefits:<br /> 
                1. Fire-safe Battery <br /> 
                2. Range prediction <br />
                3. Comfortable <br /> 
                4. Stable and safe
              </li>
            </ul>
          </div>
          <div className="tfooter">
            <Link to="/se03" className="button">Check Out</Link>
          </div>
        </li>
        <li>
          <h1>SE03Lite</h1>
          <div className="tcircle">
            <div className="product_image">
              <img className="product_image" src={black} alt="header image" />
            </div>
          </div>
          <div className="tlist">
            <ul>
              <li>Battery: 2.7Kwh</li>
              <li>Battery warranty: 3 years</li>
              <li>Charging time: 4 hours(12A)</li>
              <li>Motor: 1500W</li>
              <li>Max speed: 55 km/h</li>
              <li>Max range(@30km/h): 150km</li>
              <li>Max range(@45km/h): 110km</li>
              <li>Max range(@30km/h): 90km</li>
              <li>Other Key benefits:<br />
                1. Fire-safe Battery <br />
                2. Range prediction <br />
                3. Comfortable <br />
                4. Stable and safe
              </li>
            </ul>
          </div>
          <div className="tfooter">
            <Link to="/se03-lite" className="button">Check Out</Link>
          </div>
        </li>
        <li>
          <h1>SE03Max</h1>
          <div className="tcircle">
            <div className="product_image">
              <img className="product_image" src={black} alt="header image" />
            </div>
          </div>
          <div className="tlist">
            <ul>
              <li>Battery: 2.7Kwh</li>
              <li>Battery warranty: 3 years</li>
              <li>Charging time: 4 hours(12A)</li>
              <li>Motor: 2000W</li>
              <li>Max speed: 65 km/h</li>
              <li>Max range(@30km/h): 120km</li>
              <li>Max range(@30km/h): 100km</li>
              <li>Max range(@30km/h): 80km</li>
              <li>Other Key benefits:<br />
                1. Fire-safe Battery <br />
                2. Range prediction <br />
                3. Comfortable <br />
                4. Stable and safe
              </li>
            </ul>
          </div>
          <div className="tfooter">
            <Link to="/se03-max" className="button">Check Out</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ComparisonTable;
