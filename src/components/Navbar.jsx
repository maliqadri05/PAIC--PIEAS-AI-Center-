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
        <button
          onClick={() => setCurrentPage('Home')}
          className="nav-logo"
        >
          PAIC
        </button>
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