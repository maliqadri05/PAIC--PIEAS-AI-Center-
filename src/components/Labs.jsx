import React from 'react';
import '../styles/Labs.css';

const Labs = () => {
  const labs = [
    { name: 'Deep Learning Lab', head: 'Dr. Ahmed Khan' },
    { name: 'Computer Vision Lab', head: 'Dr. Sarah Ahmad' },
    { name: 'Autonomous Navigation Lab', head: 'Dr. Muhammad Ali' },
    { name: 'Robotics and Automation Lab', head: 'Dr. Fatima Malik' },
    { name: 'Pattern Recognition Lab', head: 'Dr. Hassan Raza' },
    { name: 'Biomedical Informatics Lab', head: 'Dr. Aisha Siddiqui' },
    { name: 'ML-based Cyber Security Lab', head: 'Dr. Usman Shah' }
  ];
  
  return (
    <div className="labs">
      <h2>Our Research Laboratories</h2>
      <div className="lab-list">
        {labs.map((lab, index) => (
          <div key={index} className="lab-item">
            <h3>{lab.name}</h3>
            <p>Lab Head: {lab.head}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labs;