import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CeylonTrim</h3>
          <p>Your premier salon for hair, nails, and more.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Address: 123 Main Street, Panadura</p>
          <p>Phone: +94 11 222 3333</p>
          <p>Email: info@ceylontrim.com</p>
        </div>
        <div className="footer-section">
          <h4>Social Media</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;