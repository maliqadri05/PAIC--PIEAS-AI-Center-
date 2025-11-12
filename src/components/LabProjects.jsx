import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/LabProjects.css';

const LabProjects = () => {
  const { labName } = useParams();
  const decodedLabName = decodeURIComponent(labName);
  const navigate = useNavigate();

  const projects = [
    // Deep Learning Lab
    {
      title: 'Neural Architecture Search for Edge Devices',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Ahmed Khan',
      students: 'Ali Hassan, Zainab Farooq',
      description: 'Automated discovery of optimal neural network architectures optimized for resource-constrained edge devices and IoT applications.'
    },
    {
      title: 'Transformer Models for Sequential Data Processing',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Ahmed Khan',
      students: 'Hassan Malik, Nadia Raza',
      description: 'Implementation of state-of-the-art transformer architectures for natural language processing, time series analysis, and sequence modeling tasks.'
    },
    {
      title: 'Generative Adversarial Networks for Image Synthesis',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Amina Siddiqui',
      students: 'Fatima Khan, Adnan Ahmed',
      description: 'Development of GAN models for realistic image generation, style transfer, and data augmentation in computer vision applications.'
    },
    {
      title: 'Recurrent Neural Networks for Time Series Forecasting',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Ahmed Khan',
      students: 'Khalid Hussain, Sara Jamil',
      description: 'LSTM and GRU-based models for accurate prediction of temporal sequences in finance, weather, and signal processing domains.'
    },
    {
      title: 'Attention Mechanisms in Deep Learning',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Amina Siddiqui',
      students: 'Omar Farooq, Ayesha Khan',
      description: 'Research on various attention mechanisms to improve model interpretability and performance across diverse neural network architectures.'
    },
    {
      title: 'Convolutional Neural Networks for Medical Imaging',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Ahmed Khan',
      students: 'Rashid Ali, Hina Ahmed',
      description: 'Advanced CNN models for medical image analysis including CT scans, X-rays, and MRI for disease detection and diagnosis.'
    },
    {
      title: 'Transfer Learning Applications in Domain Adaptation',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Amina Siddiqui',
      students: 'Bilal Raza, Samira Hassan',
      description: 'Techniques for adapting pre-trained models to new domains and tasks with minimal labeled data in various application areas.'
    },
    {
      title: 'Optimization Techniques for Neural Networks',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Ahmed Khan',
      students: 'Imran Malik, Laiba Khan',
      description: 'Study and implementation of advanced optimization algorithms including Adam, RMSprop, and gradient-based methods for faster convergence.'
    },

    // Computer Vision Lab
    {
      title: 'Real-time Object Detection in Crowded Scenes',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Sarah Ahmad',
      students: 'Bilal Ahmed, Maryam Noor',
      description: 'Efficient detection and tracking of multiple objects in high-density environments for surveillance and autonomous systems.'
    },
    {
      title: 'Facial Recognition System for Security Applications',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Sarah Ahmad',
      students: 'Faisal Khan, Rana Malik',
      description: 'Deep learning-based facial recognition system with real-time processing for identity verification and access control.'
    },
    {
      title: 'Semantic Segmentation in Urban Scenes',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Mustafa Hassan',
      students: 'Tariq Ali, Hadia Ahmed',
      description: 'Pixel-level classification of urban environments for autonomous driving, urban planning, and scene understanding.'
    },
    {
      title: '3D Reconstruction from Multi-view Images',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Sarah Ahmad',
      students: 'Waseem Raza, Zara Khan',
      description: 'Reconstruction of 3D models and point clouds from multiple 2D images using structure-from-motion techniques.'
    },
    {
      title: 'Video Analysis for Action Recognition',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Mustafa Hassan',
      students: 'Iqbal Hassan, Noor Fatima',
      description: 'Detection and classification of human actions and activities in video sequences using spatio-temporal deep learning models.'
    },
    {
      title: 'Optical Character Recognition for Urdu Documents',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Sarah Ahmad',
      students: 'Ahmed Malik, Salma Iqbal',
      description: 'Specialized OCR system for recognizing and digitizing Urdu text from scanned documents and images.'
    },
    {
      title: 'Image Enhancement and Restoration Techniques',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Mustafa Hassan',
      students: 'Saad Ahmed, Leila Khan',
      description: 'Deep learning methods for image denoising, super-resolution, and restoration of degraded or low-quality images.'
    },
    {
      title: 'Pose Estimation and Skeleton Tracking',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Sarah Ahmad',
      students: 'Azhar Malik, Rabia Hassan',
      description: 'Real-time human pose estimation and skeletal tracking for gesture recognition and motion capture applications.'
    },

    // Autonomous Navigation Lab
    {
      title: 'Autonomous Drone Navigation System',
      lab: 'Autonomous Navigation Lab',
      supervisor: 'Dr. Muhammad Ali',
      students: 'Hamza Iqbal, Sana Khan',
      description: 'Development of autonomous flight control systems for drones with GPS, computer vision, and sensor fusion capabilities.'
    },
    {
      title: 'Path Planning using Reinforcement Learning',
      lab: 'Autonomous Navigation Lab',
      supervisor: 'Dr. Muhammad Ali',
      students: 'Hassan Raza, Amina Malik',
      description: 'AI-based path planning algorithms that learn optimal trajectories through reinforcement learning in dynamic environments.'
    },
    {
      title: 'SLAM for Indoor Robot Navigation',
      lab: 'Autonomous Navigation Lab',
      supervisor: 'Dr. Fahad Hassan',
      students: 'Khalid Ahmed, Nida Iqbal',
      description: 'Simultaneous Localization and Mapping for indoor robots using LiDAR, cameras, and sensor fusion for autonomous navigation.'
    },
    {
      title: 'Real-time Obstacle Avoidance Algorithms',
      lab: 'Autonomous Navigation Lab',
      supervisor: 'Dr. Muhammad Ali',
      students: 'Adnan Khan, Farida Ahmed',
      description: 'Fast and efficient collision avoidance methods for autonomous vehicles and robots navigating through dynamic environments.'
    },
    {
      title: 'GPS-based Vehicle Tracking System',
      lab: 'Autonomous Navigation Lab',
      supervisor: 'Dr. Fahad Hassan',
      students: 'Rashid Hassan, Lina Khan',
      description: 'Real-time vehicle tracking and fleet management system using GPS, IoT sensors, and cloud-based data analysis.'
    },
    {
      title: 'Swarm Robotics for Collaborative Navigation',
      lab: 'Autonomous Navigation Lab',
      supervisor: 'Dr. Muhammad Ali',
      students: 'Samir Malik, Hana Ahmed',
      description: 'Coordination algorithms for multiple robots to navigate collaboratively and complete cooperative tasks in complex environments.'
    },
    {
      title: 'Vision-based Lane Detection for Autonomous Vehicles',
      lab: 'Autonomous Navigation Lab',
      supervisor: 'Dr. Fahad Hassan',
      students: 'Waseem Khan, Rani Hassan',
      description: 'Computer vision methods for detecting lane markings and road boundaries to guide autonomous vehicle navigation.'
    },
    {
      title: 'Sensor Fusion for Accurate Localization',
      lab: 'Autonomous Navigation Lab',
      supervisor: 'Dr. Muhammad Ali',
      students: 'Tariq Raza, Sadia Khan',
      description: 'Integration of multiple sensors (GPS, IMU, LiDAR, cameras) for precise localization and position estimation of mobile robots.'
    },

    // Robotics and Automation Lab
    {
      title: 'Collaborative Robot Arm Control',
      lab: 'Robotics and Automation Lab',
      supervisor: 'Dr. Fatima Malik',
      students: 'Usman Tariq, Ayesha Rashid',
      description: 'Development of human-robot collaborative control systems for safe and efficient robot arm operation in shared workspaces.'
    },
    {
      title: 'Automated Assembly Line Optimization',
      lab: 'Robotics and Automation Lab',
      supervisor: 'Dr. Fatima Malik',
      students: 'Faisal Ahmed, Zainab Khan',
      description: 'Machine learning approaches for optimizing manufacturing processes, scheduling, and resource allocation in automated assembly lines.'
    },
    {
      title: 'Robotic Manipulation and Grasping',
      lab: 'Robotics and Automation Lab',
      supervisor: 'Dr. Karim Hassan',
      students: 'Bilal Khan, Amera Ahmed',
      description: 'Research on grasp planning, manipulation strategies, and force control for robots to handle diverse objects and materials.'
    },
    {
      title: 'Humanoid Robot Motion Planning',
      lab: 'Robotics and Automation Lab',
      supervisor: 'Dr. Fatima Malik',
      students: 'Hassan Malik, Noor Khan',
      description: 'Algorithms for generating smooth and natural motion trajectories for humanoid robots in complex, human-like environments.'
    },
    {
      title: 'Industrial Robot Programming and Control',
      lab: 'Robotics and Automation Lab',
      supervisor: 'Dr. Karim Hassan',
      students: 'Rashid Ali, Hida Ahmed',
      description: 'Advanced programming frameworks and control systems for industrial robots with real-time feedback and adaptive control.'
    },
    {
      title: 'Machine Vision for Quality Inspection',
      lab: 'Robotics and Automation Lab',
      supervisor: 'Dr. Fatima Malik',
      students: 'Ahmed Hassan, Leila Khan',
      description: 'Automated quality inspection systems using computer vision and AI for defect detection in manufacturing processes.'
    },
    {
      title: 'Human-Robot Interaction Interface',
      lab: 'Robotics and Automation Lab',
      supervisor: 'Dr. Karim Hassan',
      students: 'Tariq Khan, Samira Ahmed',
      description: 'Natural language processing and gesture recognition interfaces for intuitive and safe human-robot interaction.'
    },
    {
      title: 'Process Automation using IoT and Robotics',
      lab: 'Robotics and Automation Lab',
      supervisor: 'Dr. Fatima Malik',
      students: 'Adnan Malik, Rana Hassan',
      description: 'Integration of IoT devices, cloud computing, and robotics for end-to-end process automation in various industries.'
    },

    // Pattern Recognition Lab
    {
      title: 'Handwritten Urdu Text Recognition',
      lab: 'Pattern Recognition Lab',
      supervisor: 'Dr. Hassan Raza',
      students: 'Fahad Mahmood, Hira Ali',
      description: 'Deep learning models for recognizing and transcribing handwritten Urdu text with high accuracy and robustness.'
    },
    {
      title: 'Speech Recognition for Urdu Language',
      lab: 'Pattern Recognition Lab',
      supervisor: 'Dr. Hassan Raza',
      students: 'Karim Khan, Nadia Ahmed',
      description: 'Automatic speech recognition system trained on Urdu language data for voice-to-text conversion and voice commands.'
    },
    {
      title: 'Fingerprint Matching and Classification',
      lab: 'Pattern Recognition Lab',
      supervisor: 'Dr. Amjad Hassan',
      students: 'Waseem Ali, Zara Khan',
      description: 'Biometric fingerprint analysis system for accurate matching, classification, and person identification.'
    },
    {
      title: 'License Plate Recognition System',
      lab: 'Pattern Recognition Lab',
      supervisor: 'Dr. Hassan Raza',
      students: 'Tariq Ahmed, Hana Khan',
      description: 'Automated vehicle license plate detection and character recognition system for traffic monitoring and toll collection.'
    },
    {
      title: 'Document Image Analysis and Processing',
      lab: 'Pattern Recognition Lab',
      supervisor: 'Dr. Amjad Hassan',
      students: 'Samir Khan, Noor Ahmed',
      description: 'Techniques for analyzing and extracting information from document images including layout analysis and content extraction.'
    },
    {
      title: 'Iris Recognition for Biometric Authentication',
      lab: 'Pattern Recognition Lab',
      supervisor: 'Dr. Hassan Raza',
      students: 'Bilal Hassan, Amina Khan',
      description: 'Advanced iris recognition algorithms for highly accurate biometric authentication and security applications.'
    },
    {
      title: 'Scene Text Detection and Recognition',
      lab: 'Pattern Recognition Lab',
      supervisor: 'Dr. Amjad Hassan',
      students: 'Rashid Khan, Salma Ahmed',
      description: 'Detection and recognition of text in natural scenes including signs, labels, and documents for information extraction.'
    },
    {
      title: 'Digit and Character Recognition using HMM',
      lab: 'Pattern Recognition Lab',
      supervisor: 'Dr. Hassan Raza',
      students: 'Hassan Ahmed, Leila Khan',
      description: 'Hidden Markov Model-based systems for recognizing handwritten and printed digits and characters with sequence modeling.'
    },

    // Biomedical Informatics Lab
    {
      title: 'AI-Powered Medical Diagnosis System',
      lab: 'Biomedical Informatics Lab',
      supervisor: 'Dr. Aisha Siddiqui',
      students: 'Imran Malik, Rabia Shahid',
      description: 'Intelligent diagnostic system using machine learning to assist physicians in disease detection and patient management.'
    },
    {
      title: 'ECG Analysis for Cardiac Disease Detection',
      lab: 'Biomedical Informatics Lab',
      supervisor: 'Dr. Aisha Siddiqui',
      students: 'Ahmed Khan, Fatima Ahmed',
      description: 'Automated ECG signal analysis for detecting arrhythmias, myocardial infarction, and other cardiac abnormalities.'
    },
    {
      title: 'CT Scan Image Analysis for Tumor Detection',
      lab: 'Biomedical Informatics Lab',
      supervisor: 'Dr. Sana Hassan',
      students: 'Khalid Malik, Nida Khan',
      description: 'AI-based analysis of CT scan images for early tumor detection and cancer diagnosis with high sensitivity and specificity.'
    },
    {
      title: 'Gene Expression Analysis using ML',
      lab: 'Biomedical Informatics Lab',
      supervisor: 'Dr. Aisha Siddiqui',
      students: 'Waseem Ahmed, Zainab Khan',
      description: 'Machine learning models for analyzing gene expression patterns to understand disease mechanisms and identify biomarkers.'
    },
    {
      title: 'Disease Outbreak Prediction Model',
      lab: 'Biomedical Informatics Lab',
      supervisor: 'Dr. Sana Hassan',
      students: 'Adnan Khan, Rani Ahmed',
      description: 'Predictive models using historical and real-time data to forecast disease outbreaks for public health intervention.'
    },
    {
      title: 'Protein Structure Prediction',
      lab: 'Biomedical Informatics Lab',
      supervisor: 'Dr. Aisha Siddiqui',
      students: 'Bilal Raza, Hana Khan',
      description: 'Deep learning approaches for predicting 3D protein structures from amino acid sequences for drug discovery research.'
    },
    {
      title: 'Retinal Image Analysis for Diabetic Retinopathy',
      lab: 'Biomedical Informatics Lab',
      supervisor: 'Dr. Sana Hassan',
      students: 'Tariq Hassan, Samira Khan',
      description: 'Automated detection and grading of diabetic retinopathy from fundus images for early disease intervention.'
    },
    {
      title: 'Health Monitoring System using Wearables',
      lab: 'Biomedical Informatics Lab',
      supervisor: 'Dr. Aisha Siddiqui',
      students: 'Hassan Khan, Leila Ahmed',
      description: 'IoT-based health monitoring system that collects and analyzes vital signs from wearable devices for patient wellness tracking.'
    },

    // ML-Based Cyber Security Lab
    {
      title: 'Intrusion Detection using Deep Learning',
      lab: 'ML-Based Cyber Security Lab',
      supervisor: 'Dr. Usman Shah',
      students: 'Kashif Raza, Nida Jamil',
      description: 'Neural network-based intrusion detection system for identifying unauthorized network access and cyber attacks in real-time.'
    },
    {
      title: 'Malware Detection and Classification',
      lab: 'ML-Based Cyber Security Lab',
      supervisor: 'Dr. Usman Shah',
      students: 'Faisal Hassan, Amera Khan',
      description: 'Machine learning models for detecting and classifying malware variants from binary and behavioral analysis.'
    },
    {
      title: 'Phishing Email Detection System',
      lab: 'ML-Based Cyber Security Lab',
      supervisor: 'Dr. Rashid Ahmed',
      students: 'Ahmed Malik, Zara Hassan',
      description: 'Email filtering system using NLP and ML to identify phishing attempts and fraudulent messages automatically.'
    },
    {
      title: 'Network Traffic Anomaly Detection',
      lab: 'ML-Based Cyber Security Lab',
      supervisor: 'Dr. Usman Shah',
      students: 'Bilal Khan, Noor Ahmed',
      description: 'Unsupervised learning techniques to detect abnormal network traffic patterns indicating potential security threats.'
    },
    {
      title: 'DDoS Attack Prediction and Prevention',
      lab: 'ML-Based Cyber Security Lab',
      supervisor: 'Dr. Rashid Ahmed',
      students: 'Tariq Malik, Hida Khan',
      description: 'Predictive models for forecasting DDoS attacks and adaptive mitigation strategies for network resilience.'
    },
    {
      title: 'Cryptography and Key Management System',
      lab: 'ML-Based Cyber Security Lab',
      supervisor: 'Dr. Usman Shah',
      students: 'Samir Hassan, Samira Ahmed',
      description: 'Implementation of secure encryption algorithms and AI-enhanced key management for protecting sensitive data.'
    },
    {
      title: 'Zero-Day Exploit Detection',
      lab: 'ML-Based Cyber Security Lab',
      supervisor: 'Dr. Rashid Ahmed',
      students: 'Waseem Raza, Leila Khan',
      description: 'Advanced anomaly detection techniques for identifying previously unknown zero-day vulnerabilities and exploits.'
    },
    {
      title: 'Behavioral Analysis for Insider Threat Detection',
      lab: 'ML-Based Cyber Security Lab',
      supervisor: 'Dr. Usman Shah',
      students: 'Hassan Ahmed, Rani Khan',
      description: 'User behavior profiling and anomaly detection to identify suspicious activities and insider threats within organizations.'
    }
  ];

  const filteredProjects = projects.filter(
    project => project.lab === decodedLabName
  );

  return (
    <div className="lab-projects">
      <button 
        onClick={() => navigate(`/labs/${encodeURIComponent(decodedLabName)}/details`)}
        className="back-btn"
        aria-label="Back to lab details"
      >
        ← Back
      </button>
      
      <div className="lab-projects-header">
        <h1 className="lab-projects-title">Projects in {decodedLabName}</h1>
      </div>
      
      <div className="lab-projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-supervisor">Supervisor: {project.supervisor}</p>
            <p className="project-students">Students: {project.students}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-logo-box">
              <img src="/paic-logo.png" alt="PAIC logo" />
            </div>
            <div className="footer-copy">© 2025 PIEAS Artificial Intelligence Center</div>
          </div>

          <div className="footer-right">
            <div className="follow-us">FOLLOW US</div>
            <div className="social-icons">
              <a className="social-btn" href="#" aria-label="facebook" title="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H8.07v-2.9h2.37V9.41c0-2.34 1.38-3.63 3.5-3.63. 1.02 0 2.08.18 2.08.18v2.29h-1.17c-1.15 0-1.51.72-1.51 1.46v1.75h2.57l-.41 2.9h-2.16V22c4.78-.75 8.44-4.91 8.44-9.93z"/></svg>
              </a>
              <a className="social-btn" href="#" aria-label="linkedin" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5v15H0v-15zM8.5 8.98h4.8v2.07h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.69v8.84h-5V17.1c0-2.02-.04-4.62-2.81-4.62-2.81 0-3.24 2.2-3.24 4.47v8.05h-5v-15z"/></svg>
              </a>
              <a className="social-btn" href="#" aria-label="twitter" title="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 0 0 1.84-2.32 8.4 8.4 0 0 1-2.66 1.02 4.2 4.2 0 0 0-7.16 3.83A11.9 11.9 0 0 1 3.16 4.6a4.2 4.2 0 0 0 1.3 5.6c-.65-.02-1.26-.2-1.8-.5v.05c0 2.15 1.53 3.94 3.56 4.34-.37.1-.76.15-1.16.15-.28 0-.55-.03-.82-.08.55 1.7 2.15 2.94 4.05 2.98A8.43 8.43 0 0 1 2 19.54a11.9 11.9 0 0 0 6.45 1.89c7.74 0 11.98-6.41 11.98-11.98l-.01-.55A8.6 8.6 0 0 0 22.46 6z"/></svg>
              </a>
              <a className="social-btn" href="#" aria-label="youtube" title="YouTube">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1-2.9-.2-7.2-.2-7.2-.2h-.1s-4.3 0-7.2.2c-.4.1-1.3.1-2.1 1C1.2 4.5 1 6.2 1 6.2S.8 8 .8 9.8v.4C.8 12.8 1 14.6 1 14.6s.2 1.7.8 2.4c.8.9 1.8.9 2.3 1 1.7.1 7 .2 7.7.2h.1s4.3 0 7.2-.2c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-1.8.2-3.6v-.4c0-1.8-.2-3.6-.2-3.6zM9.75 15.02V8.98l5.5 3.02-5.5 3.02z"/></svg>
              </a>
              <a className="social-btn" href="#" aria-label="instagram" title="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zm6.4-2.6a1.12 1.12 0 1 0 1.12 1.12A1.12 1.12 0 0 0 18.4 5.6zM12 15.2A3.2 3.2 0 1 1 15.2 12 3.2 3.2 0 0 1 12 15.2z"/></svg>
              </a>
              <a className="social-btn" href="#" aria-label="android" title="Android">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.6 9.48c.05-.16.08-.33.08-.52A3.08 3.08 0 0 0 14.66 5H9.34A3.08 3.08 0 0 0 6.36 8.96c0 .19.03.36.08.52C4.26 10.02 2.5 11.71 2.5 13.77V18h19v-4.23c0-2.06-1.76-3.75-4.9-4.29z"/></svg>
              </a>
            </div>
            <div className="footer-links">
              <button className="footer-link" onClick={() => window.location.href = '/contact'}>CONTACT US</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LabProjects;