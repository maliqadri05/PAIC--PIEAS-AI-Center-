import React from 'react';
import { Starfield } from '../App';
import '../styles/Home.css';

const Home = () => {
  const cards = [
    {
      title: "Cutting-Edge Research",
      description: "Leading hub for AI research bringing together world-class researchers and state-of-the-art laboratories dedicated to advancing AI technology.",
      icon: "🔬"
    },
    {
      title: "Multidisciplinary Focus",
      description: "Transformative research across deep learning, computer vision, autonomous systems, robotics, pattern recognition, and cybersecurity.",
      icon: "🎯"
    },
    {
      title: "Future Leaders",
      description: "Fostering the next generation of AI leaders and contributing to Pakistan's technological advancement on the global stage.",
      icon: "🚀"
    }
  ];
  
  return (
    <div className="home">
      <Starfield />
      <div className="home-container">
        <div className="home-header animate-fadeIn">
          <h1 className="home-title animate-slideDown">
            PIEAS Artificial Intelligence Center
          </h1>
          <p className="home-subtitle animate-slideUp">
            Pioneering AI Research and Innovation
          </p>
        </div>
        
        <div className="home-cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className="home-card hover-card animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
        
        <div className="home-vision animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <h2>Our Vision</h2>
          <p>
            At PAIC, we focus on transformative research across multiple domains including deep learning, computer vision, autonomous systems, robotics, pattern recognition, biomedical informatics, and cybersecurity. Our multidisciplinary approach fosters collaboration and drives breakthrough innovations that address real-world challenges.
          </p>
          <p>
            Through our specialized laboratories and dedicated faculty, we provide an exceptional environment for research excellence, fostering the next generation of AI leaders and contributing to Pakistan's technological advancement on the global stage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;