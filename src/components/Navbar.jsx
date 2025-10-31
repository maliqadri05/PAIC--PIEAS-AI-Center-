import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const getPath = (page) => page === 'Home' ? '/' : `/${page.toLowerCase()}`;
  
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">PAIC</Link>
      </div>
      <div className="nav-links">
        {['Home', 'Labs', 'Projects', 'Alumni', 'Contact'].map(page => (
          <Link
            key={page}
            to={getPath(page)}
            className={`nav-link ${location.pathname === getPath(page) ? 'active' : ''}`}
          >
            {page}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;