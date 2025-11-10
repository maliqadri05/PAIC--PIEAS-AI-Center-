import React from 'react';
import { Starfield } from '../App';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Neural Architecture Search for Edge Devices',
      lab: 'Deep Learning Lab',
      description: 'Developing automated neural architecture search algorithms optimized for resource-constrained edge computing devices.',
      team: 'Dr. Ahmed Khan, Ali Hassan, Zainab Farooq',
      icon: '💻'
    },
    {
      title: 'Real-time Object Detection in Crowded Scenes',
      lab: 'Computer Vision Lab',
      description: 'Advanced object detection system capable of identifying and tracking multiple objects in high-density environments.',
      team: 'Dr. Sarah Ahmad, Bilal Ahmed, Maryam Noor',
      icon: '📹'
    },
    {
      title: 'Autonomous Drone Navigation System',
      lab: 'Autonomous Navigation Lab',
      description: 'Development of intelligent navigation algorithms for autonomous drones in GPS-denied environments using visual SLAM.',
      team: 'Dr. Muhammad Ali, Hamza Iqbal, Sana Khan',
      icon: '🚁'
    },
    {
      title: 'Collaborative Robot Arm Control',
      lab: 'Robotics and Automation Lab',
      description: 'Designing safe human-robot collaboration systems with adaptive impedance control for industrial applications.',
      team: 'Dr. Fatima Malik, Usman Tariq, Ayesha Rashid',
      icon: '🦾'
    },
    {
      title: 'Handwritten Urdu Text Recognition',
      lab: 'Pattern Recognition Lab',
      description: 'Deep learning-based system for recognizing and digitizing handwritten Urdu text with high accuracy.',
      team: 'Dr. Hassan Raza, Fahad Mahmood, Hira Ali',
      icon: '✍️'
    },
    {
      title: 'AI-Powered Medical Diagnosis System',
      lab: 'Biomedical Informatics Lab',
      description: 'Machine learning models for early detection and diagnosis of cardiovascular diseases from medical imaging.',
      team: 'Dr. Aisha Siddiqui, Imran Malik, Rabia Shahid',
      icon: '🏥'
    },
    {
      title: 'Intrusion Detection using Deep Learning',
      lab: 'ML-Based Cyber Security Lab',
      description: 'Advanced network intrusion detection system using deep learning to identify and prevent cyber attacks in real-time.',
      team: 'Dr. Usman Shah, Kashif Raza, Nida Jamil',
      icon: '🛡️'
    }
  ];
  
  return (
    <div className="projects">
      <Starfield />
      <div className="projects-container">
        <h1 className="projects-title animate-fadeIn">
          Ongoing Research Projects
        </h1>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-content">
                <div className="project-icon">{project.icon}</div>
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-lab">{project.lab}</p>
                  <p className="project-description">{project.description}</p>
                  <p className="project-team">
                    <span className="team-label">Team:</span> {project.team}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;