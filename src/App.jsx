import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Labs from './components/Labs';
import Alumni from './components/Alumni';
import Contact from './components/Contact';
import About from './components/About';
import Publications from './components/Publications';
import Events from './components/Events';
import LabProjects from './components/LabProjects';
import LabDetails from './components/LabDetails';
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
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/labs/:labName/details" element={<LabDetails />} />
          <Route path="/labs/:labName/projects" element={<LabProjects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/events" element={<Events />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;