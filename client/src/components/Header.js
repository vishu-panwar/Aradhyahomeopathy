import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Main Sticky Header */}
      <header className="site-header">
        <div className="nav-container">
          {/* Logo Brand Group */}
          <Link to="/" className="brand-logo-link" onClick={closeMenu}>
            <div className="brand-emblem">🌿</div>
            <div className="brand-title-text">
              Aradhya <span>Homeopathy</span>
            </div>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button 
            type="button" 
            className="mobile-toggle-btn" 
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            ☰
          </button>

          {/* Navigation Menu Links */}
          <ul className={`nav-menu-list ${menuOpen ? 'is-open' : ''}`} id="mainNavMenu">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
            <li><Link to="/category" onClick={closeMenu}>Category</Link></li>
            <li><Link to="/combo-pack" onClick={closeMenu}>Combo Pack</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
            <li className="mobile-nav-cta">
              <Link to="/contact" className="btn-get-consultation" onClick={closeMenu}>
                Get Consultation
              </Link>
            </li>
          </ul>

          {/* Desktop CTA Button */}
          <Link to="/contact" className="btn-get-consultation">Get Consultation</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
