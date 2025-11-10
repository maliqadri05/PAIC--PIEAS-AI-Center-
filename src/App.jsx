import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Labs from './components/Labs';
import Projects from './components/Projects';
import Alumni from './components/Alumni';
import Contact from './components/Contact';
import './styles/App.css';

// Starfield Background Component
export const Starfield = () => {
  const [stars] = React.useState(() => {
    const newStars = [];
    for (let i = 0; i < 150; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      });
    }
    return newStars;
  });
  
  return (
    <div className="starfield">
      {stars.map(star => (
        <div
          key={star.id}
          className="star animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Labs':
        return <Labs />;
      case 'Projects':
        return <Projects />;
      case 'Alumni':
        return <Alumni />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };
  
  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;