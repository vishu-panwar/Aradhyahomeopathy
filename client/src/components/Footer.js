import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/ChatGPT_Image_Aug_20__2026__02_56_04_PM-removebg-preview.png" 
                alt="Aradhya Homeopathy Logo" 
                className="footer-logo-image"
              />
              <span className="footer-logo-text">Aradhya Homeopathy</span>
            </div>
            <p className="footer-description">
              Your health, our priority. We deliver high-quality homeopathy medicines 
              nationwide with care and dedication. Trusted by thousands for natural healing 
              and wellness solutions.
            </p>
            <div className="social-links">
              <a href="#facebook" className="social-link" aria-label="Facebook">
                📘
              </a>
              <a href="#instagram" className="social-link" aria-label="Instagram">
                📷
              </a>
              <a href="#twitter" className="social-link" aria-label="Twitter">
                🐦
              </a>
              <a href="#whatsapp" className="social-link" aria-label="WhatsApp">
                💬
              </a>
              <a href="#youtube" className="social-link" aria-label="YouTube">
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#products" className="footer-link">Products</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li><a href="#consultation" className="footer-link">Online Consultation</a></li>
              <li><a href="#delivery" className="footer-link">Home Delivery</a></li>
              <li><a href="#treatment" className="footer-link">Treatment Plans</a></li>
              <li><a href="#wellness" className="footer-link">Wellness Programs</a></li>
              <li><a href="#support" className="footer-link">24/7 Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>123 Health Street, Wellness City, India - 400001</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@Aradhyahomeopathy.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © 2026 Aradhya Homeopathy. All rights reserved. Made with ❤️ in India
          </p>
          <ul className="footer-bottom-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
