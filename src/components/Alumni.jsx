import React from 'react';
import { Starfield } from '../App';
import '../styles/Alumni.css';

const Alumni = () => {
  const alumni = [
    { name: 'Amir Hussain', lab: 'Deep Learning Lab', year: '2023' },
    { name: 'Farah Aziz', lab: 'Computer Vision Lab', year: '2023' },
    { name: 'Kamran Sheikh', lab: 'Autonomous Navigation Lab', year: '2022' },
    { name: 'Saima Akram', lab: 'Robotics and Automation Lab', year: '2023' },
    { name: 'Tariq Jameel', lab: 'Pattern Recognition Lab', year: '2022' },
    { name: 'Nadia Pervez', lab: 'Biomedical Informatics Lab', year: '2023' },
    { name: 'Waqas Butt', lab: 'ML-based Cyber Security Lab', year: '2022' },
    { name: 'Sidra Batool', lab: 'Deep Learning Lab', year: '2021' },
    { name: 'Arslan Rauf', lab: 'Computer Vision Lab', year: '2022' },
    { name: 'Mehwish Rani', lab: 'Robotics and Automation Lab', year: '2021' },
    { name: 'Junaid Malik', lab: 'Pattern Recognition Lab', year: '2023' },
    { name: 'Samina Riaz', lab: 'Biomedical Informatics Lab', year: '2021' }
  ];
  
  return (
    <div className="alumni">
      <Starfield />
      <div className="alumni-container">
        <h1 className="alumni-title animate-fadeIn">
          Our Distinguished Alumni
        </h1>
        
        <div className="alumni-grid">
          {alumni.map((person, index) => (
            <div
              key={index}
              className="alumni-card animate-fadeIn"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="alumni-avatar">
                {person.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="alumni-name">{person.name}</h3>
              <p className="alumni-lab">{person.lab}</p>
              <p className="alumni-year">Class of {person.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;