import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section quote-section">
          <h3>Share Your Experience</h3>
          <p>We value your feedback on our food and service. Let us know how we can make your dining experience better.</p>
          <a href="tel:+1234567890" className='callNow'>Contact Us</a>
        </div>
        <div className="footer-section simran-section">
          <h3>Little Lemon Restaurant</h3>
          <p>
            At Little Lemon Restaurant, we are passionate about creating memorable dining experiences. From our chef's finest creations to our attentive staff, we strive for excellence in every aspect.
          </p>
        </div>
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/book">Reservations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <div className="contact-info-2">
          <h3>Contact Us</h3>
          <p>Location: 123 Main St, Your City, USA</p>
          <p>Email: <a href="mailto:info@littlelemonrestaurant.com">info@littlelemonrestaurant.com</a></p>
          <p>Call: <a href="tel:+1234567890">+1 (123) 456-7890</a></p>
          <div className="icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-yelp"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p>
          Disclaimer: The information on this website is for informational purposes only. &copy; 2023 Little Lemon Restaurant.
        </p>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2023 All rights reserved | Design & Developed by Sidak Singh Sra</p>
      </div>
    </footer>
  );
};

export default Footer;
