import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Starfield } from '../App';
import '../styles/LabDetails.css';

const LabDetails = () => {
  const { labName } = useParams();
  const decodedLabName = decodeURIComponent(labName);
  const navigate = useNavigate();

  const labsData = {
    'Deep Learning Lab': {
      head: 'Dr. Asifullah Khan',
      icon: '🧠',
      description: 'The Deep Learning Lab focuses on developing advanced neural network architectures and training methodologies for solving complex computational problems. Our research spans from foundational deep learning models to cutting-edge applications in computer vision, natural language processing, and reinforcement learning.',
      resources: [
        'NVIDIA GPU Clusters (A100, RTX 4090)',
        'TensorFlow & PyTorch Framework',
        'High-Performance Computing (HPC) Infrastructure',
        'Data Annotation Tools & Platforms',
        'Cloud Computing Services (AWS, Google Cloud)'
      ],
      faculty: [
        { name: 'Dr. Asifullah Khan', title: 'Lab Head', specialty: 'Deep Learning' }
      ]
    },
    'Computer Vision Lab': {
      head: 'Dr. Naeem Akhtar',
      icon: '👁️',
      description: 'The Computer Vision Lab specializes in developing algorithms and systems for image and video analysis. We work on object detection, semantic segmentation, pose estimation, and 3D reconstruction, with applications in surveillance, autonomous systems, and medical imaging.',
      resources: [
        'High-Resolution Camera Arrays',
        'LiDAR & Depth Sensors',
        'OpenCV & OpenGL Libraries',
        'GPU-accelerated Processing Units',
        'Real-time Video Streaming Infrastructure'
      ],
      faculty: [
        { name: 'Dr. Naeem Akhtar', title: 'Lab Head', specialty: 'Computer Vision' }
      ]
    },
    'Robotics Lab': {
      head: 'Dr. Nasir Rahman Jadoon',
      icon: '🤖',
      description: 'The Robotics and Automation Lab works on designing and programming industrial and collaborative robots for manufacturing and service applications. Focus areas include robotic manipulation, motion planning, human-robot interaction, and process automation.',
      resources: [
        'Collaborative Robot Arms (UR, ABB)',
        'Industrial Robotic Systems',
        'Motion Capture Systems',
        'Force/Torque Sensors',
        'Manufacturing Simulation Software'
      ],
      faculty: [
        { name: 'Dr. Nasir Rahman Jadoon', title: 'Lab Head', specialty: 'Robotic Control & Manipulation' }
      ]
    },
    'Bioinformatics Lab': {
      head: 'Dr. Abdul Majid',
      icon: '⚕️',
      description: 'The Biomedical Informatics Lab applies AI and machine learning to healthcare and medical research. Our work includes disease diagnosis, medical image analysis, genomics analysis, and personalized medicine applications.',
      resources: [
        'Medical Imaging Equipment (CT, MRI, X-ray)',
        'Genomic Sequencing Tools',
        'Electronic Health Records (EHR) Systems',
        'Bioinformatics Software Suites',
        'Healthcare Data Analytics Platforms'
      ],
      faculty: [
        { name: 'Dr. Abdul Majid', title: 'Lab Head', specialty: 'Medical AI & Diagnostics' }
      ]
    }
  };

  const lab = labsData[decodedLabName];

  if (!lab) {
    return (
      <div className="lab-details-container">
        <Starfield />
        <div className="lab-details-content">
          <button onClick={() => navigate('/labs')} className="back-btn">← Back</button>
          <h1>Lab Not Found</h1>
          <p>The requested lab could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lab-details-container">
      <Starfield />
      <div className="lab-details-content">
        {/* Back button */}
        <button onClick={() => navigate('/labs')} className="back-btn">← Back</button>
        
        {/* Header */}
        <div className="lab-details-header">
          <h1 className="lab-details-title">
            <span className="lab-icon">{lab.icon}</span>
            {decodedLabName}
          </h1>
        </div>

        {/* Lab Description Card */}
        <div className="lab-info-card">
          <h2>About the Lab</h2>
          <p className="lab-head-info">Lab Head: <strong>{lab.head}</strong></p>
          <p className="lab-description">{lab.description}</p>
        </div>

        {/* Resources Card */}
        <div className="lab-info-card">
          <h2>Resources & Infrastructure</h2>
          <div className="resources-list">
            {lab.resources.map((resource, index) => (
              <div key={index} className="resource-item">
                <span className="resource-icon">📦</span>
                <span>{resource}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Cards */}
        <div className="faculty-section">
          <h2 className="section-title">Faculty Members</h2>
          <div className="faculty-grid">
            {lab.faculty.map((member, index) => (
              <div key={index} className="faculty-info-card">
                <div className="faculty-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="faculty-name">{member.name}</h3>
                <p className="faculty-title">{member.title}</p>
                <p className="faculty-specialty">Specialty: {member.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Button */}
        <div className="projects-section">
          <h2 className="section-title">Lab Projects</h2>
          <button 
            onClick={() => navigate(`/labs/${encodeURIComponent(decodedLabName)}/projects`)}
            className="view-projects-btn"
          >
            View All Projects →
          </button>
        </div>
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

export default LabDetails;
