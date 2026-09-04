import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid-layout">
          {/* Brand & Mission Column */}
          <div>
            <h3 className="footer-brand-title">
              Aradhya <span>Homeopathy</span>
            </h3>
            <p className="footer-brand-desc">
              Your health, our priority. We deliver high-quality homeopathy medicines nationwide 
              with care and dedication. Trusted by thousands for natural healing and wellness solutions.
            </p>
            <div className="footer-social-row">
              <a href="#facebook" className="footer-social-icon" aria-label="Facebook">📱</a>
              <a href="#whatsapp" className="footer-social-icon" aria-label="WhatsApp">💬</a>
              <a href="#website" className="footer-social-icon" aria-label="Website">🌐</a>
              <a href="mailto:info@aradhyahomeopathy.com" className="footer-social-icon" aria-label="Email">✉️</a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/shop">Products</Link></li>
              <li><Link to="/category">Categories</Link></li>
              <li><Link to="/combo-pack">Combo Packs</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links-list">
              <li><Link to="/contact">Online Consultation</Link></li>
              <li><Link to="/shop">Home Delivery</Link></li>
              <li><Link to="/contact">Treatment Plans</Link></li>
              <li><Link to="/about">Wellness Programs</Link></li>
              <li><Link to="/contact">24/7 Support</Link></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <span>📍</span>
                <span>123 Health Street, Wellness City, India - 400001</span>
              </li>
              <li>
                <span>📞</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <span>✉️</span>
                <a href="mailto:info@aradhyahomeopathy.com">info@aradhyahomeopathy.com</a>
              </li>
              <li>
                <span>⏰</span>
                <span>Mon - Sat: 9:00 AM - 8:00 PM<br />(Sunday: Closed)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-strip">
          <div>© 2026 Aradhya Homeopathy. All rights reserved. Made with ❤️ in India</div>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
