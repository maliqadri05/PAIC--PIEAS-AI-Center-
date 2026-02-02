import React from 'react';
import { Starfield } from '../App';
import '../styles/ComingSoon.css';

const ComingSoon = ({ pageName = 'This page' }) => {
  return (
    <div className="coming-soon">
      <Starfield />
      <div className="coming-container animate-fadeIn">
        <h1 className="coming-title">{pageName} — Coming Soon</h1>
        <p className="coming-sub">We're working on this page and will add it in the near future. Meanwhile, feel free to explore other sections or contact us for more information.</p>
        <div className="coming-actions">
          <a href="/" className="btn">Go to Home</a>
          <a href="/contact" className="btn secondary">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
