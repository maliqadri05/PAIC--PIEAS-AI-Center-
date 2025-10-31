import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Neural Architecture Search for Edge Devices',
      lab: 'Deep Learning Lab',
      description: 'Developing automated neural architecture search algorithms optimized for resource-constrained edge computing devices.',
      team: 'Dr. Ahmed Khan, Ali Hassan, Zainab Farooq'
    },
    {
      title: 'Real-time Object Detection in Crowded Scenes',
      lab: 'Computer Vision Lab',
      description: 'Advanced object detection system capable of identifying and tracking multiple objects in high-density environments.',
      team: 'Dr. Sarah Ahmad, Bilal Ahmed, Maryam Noor'
    },
    {
      title: 'Autonomous Drone Navigation System',
      lab: 'Autonomous Navigation Lab',
      description: 'Development of intelligent navigation algorithms for autonomous drones in GPS-denied environments using visual SLAM.',
      team: 'Dr. Muhammad Ali, Hamza Iqbal, Sana Khan'
    },
    {
      title: 'Collaborative Robot Arm Control',
      lab: 'Robotics and Automation Lab',
      description: 'Designing safe human-robot collaboration systems with adaptive impedance control for industrial applications.',
      team: 'Dr. Fatima Malik, Usman Tariq, Ayesha Rashid'
    },
    {
      title: 'Handwritten Urdu Text Recognition',
      lab: 'Pattern Recognition Lab',
      description: 'Deep learning-based system for recognizing and digitizing handwritten Urdu text with high accuracy.',
      team: 'Dr. Hassan Raza, Fahad Mahmood, Hira Ali'
    },
    {
      title: 'AI-Powered Medical Diagnosis System',
      lab: 'Biomedical Informatics Lab',
      description: 'Machine learning models for early detection and diagnosis of cardiovascular diseases from medical imaging.',
      team: 'Dr. Aisha Siddiqui, Imran Malik, Rabia Shahid'
    },
    {
      title: 'Intrusion Detection using Deep Learning',
      lab: 'ML-based Cyber Security Lab',
      description: 'Advanced network intrusion detection system using deep learning to identify and prevent cyber attacks in real-time.',
      team: 'Dr. Usman Shah, Kashif Raza, Nida Jamil'
    }
  ];
  
  return (
    <section className="projects">
      <h2>Ongoing Research Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <article key={index} className="project">
            <h3>{project.title}</h3>
            <h4>{project.lab}</h4>
            <p>{project.description}</p>
            <p>Team: {project.team}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;