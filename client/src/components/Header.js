import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-wrapper">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
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

        <button
          type="button"
          className={`mobile-menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <div className="mobile-menu-header">
          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <div className="mobile-menu-links">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/shop" onClick={closeMenu}>Shop</Link>
          <Link to="/category" onClick={closeMenu}>Category</Link>
          <Link to="/combo-pack" onClick={closeMenu}>Combo Pack</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/blog" onClick={closeMenu}>Blog</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        </div>

        <Link to="/contact" className="mobile-menu-cta" onClick={closeMenu}>
          Get Consultation
        </Link>
      </nav>
    </header>
  );
};

export default Header;
