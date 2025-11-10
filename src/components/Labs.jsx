import React from 'react';
import { Starfield } from '../App';
import '../styles/Labs.css';

const Labs = () => {
  const labs = [
    { name: 'Deep Learning Lab', head: 'Dr. Ahmed Khan', icon: '🧠', color: 'purple' },
    { name: 'Computer Vision Lab', head: 'Dr. Sarah Ahmad', icon: '👁️', color: 'blue' },
    { name: 'Autonomous Navigation Lab', head: 'Dr. Muhammad Ali', icon: '🗺️', color: 'green' },
    { name: 'Robotics and Automation Lab', head: 'Dr. Fatima Malik', icon: '🤖', color: 'orange' },
    { name: 'Pattern Recognition Lab', head: 'Dr. Hassan Raza', icon: '📊', color: 'pink' },
    { name: 'Biomedical Informatics Lab', head: 'Dr. Aisha Siddiqui', icon: '⚕️', color: 'red' },
    { name: 'ML-Based Cyber Security Lab', head: 'Dr. Usman Shah', icon: '🔒', color: 'indigo' }
  ];
  
  return (
    <div className="labs">
      <Starfield />
      <div className="labs-container">
        <h1 className="labs-title animate-fadeIn">
          Our Research Laboratories
        </h1>
        
        <div className="labs-grid">
          {labs.map((lab, index) => (
            <div
              key={index}
              className={`lab-card lab-card-${lab.color} animate-fadeIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="lab-content">
                <div className="lab-icon">{lab.icon}</div>
                <h3 className="lab-name">{lab.name}</h3>
                <p className="lab-head">Lab Head: {lab.head}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Labs;