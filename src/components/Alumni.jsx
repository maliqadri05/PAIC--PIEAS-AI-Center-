import React from 'react';
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
    <section className="alumni-section">
      {/* Section title */}
      <h2>Our Distinguished Alumni</h2>
      {/* Loop over each alumni and display their info */}
      <div className="alumni-list">
        {alumni.map((person, index) => (
          // Each alumnus is shown inside a div
          <div className="alumni-card" key={index}>
            <div className="alumni-name">{person.name}</div>
            <div className="alumni-lab">{person.lab}</div>
            <div className="alumni-year">Graduated: {person.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alumni;