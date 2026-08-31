import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-wrapper">
        <Link to="/" className="brand-logo">
          <img 
            src="/ChatGPT_Image_Aug_20__2026__02_56_04_PM-removebg-preview.png" 
            alt="Aradhya Homeopathy" 
          />
        </Link>

        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/category">Category</Link>
          <Link to="/combo-pack">Combo Pack</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <Link to="/contact" className="header-cta">
          Get Consultation
        </Link>
      </div>
    </header>
  );
};

export default Header;
