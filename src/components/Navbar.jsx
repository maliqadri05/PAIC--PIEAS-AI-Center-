import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = ['Home', 'Labs', 'Projects', 'Alumni', 'Contact'];
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand" onClick={() => setCurrentPage('Home')}
             role="button" tabIndex={0} aria-label="Go to Home">
          {/* Brand image (place the provided image at /paic-logo.png in the project root or public folder) */}
          <img src="/paic-logo.png" alt="PAIC logo" className="nav-logo-img" />
          <span className="nav-title">PAIC</span>
        </div>
        <div className="nav-menu">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`nav-link ${currentPage === item ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;