import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Get in Touch</h3>
          <p>Address: 8819 Ohio St. South Gate, CA 90280</p>
          <p>Email: ourstudio@hello.com</p>
          <p>Phone: +1 386-688-3295</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 All rights reserved. Developed by Aknioune</p>
      </div>
    </footer>
  );
}

export default Footer;
