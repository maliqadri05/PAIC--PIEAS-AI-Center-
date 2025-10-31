import React from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const pages = ['Home', 'Labs', 'Projects', 'Alumni', 'Contact'];
  
  return (
    
      
        PAIC
        
          {pages.map(page => (
            
              <a
                className={`nav-link ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              
            
          ))}
        
      
    
  );
};

export default Navbar;