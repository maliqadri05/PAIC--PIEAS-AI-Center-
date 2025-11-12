import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'LABS', path: '/labs' },
    { name: 'ALUMNI', path: '/alumni' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-brand" aria-label="Go to Home">
          <img src="/paic-logo.png" alt="PAIC logo" className="nav-logo-img" />
          <span className="nav-title">PAIC</span>
        </Link>
        <div className="nav-menu">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className="nav-link"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;