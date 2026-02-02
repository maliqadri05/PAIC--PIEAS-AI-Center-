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
      title: 'CodeCraft: Automated Code Generation Suite for Enterprise Web Applications',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Asifullah Khan',
      students: 'Mr. Abdul Rehman , Mr. Muhammad Huzaifa',
      description: 'CodeCraft is a no-code solution designed to automate the generation of enterprise web application code. By analyzing a given database schema—including tables, relationships, and constraints—the system automatically produces an extendable code skeleton. It generates backend code in NestJS, frontend code in Angular, and integrated automated testing scripts with prebuilt, configurable modules. In addition, a multiagent framework of AI agents is implemented to collaboratively manage and execute various code generation tasks, thereby streamlining the process and further reducing development time by approximately 75–80% with minimal manual intervention.'
    },
    {
      title: 'AI-Powered Micro-Learning Platform for AI Course',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Asifullah Khan',
      students: 'Mr. Abu Bakar, Mr. Hussain Ali Jahangir',
      description: 'Code Reels is an AI-driven, mobile-first platform designed to revolutionize computer science education by transforming long, complex courses into engaging, interactive, TikTok-style reels. These 60-second clips incorporate quizzes, code simulations, and synthetic instructors to captivate Gen Z learners. The platform leverages fine-tuned language models, multimodal AI, and gamification to provide a personalized, immersive learning experience.'
    },
    {
      title: 'Anomaly Detection at University Entrance Using YOLOv11',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Asifullah Khan',
      students: 'Mr. Shahzaib Khan, Mr. Waleed Abbasi',
      description: 'In context of security monitoring, this project proposes the development of an Anomaly Detection System at University Entrance Using YOLOv11. This system will leverage advanced real-time object detection and anomaly classification to identify suspicious activities at university entrances. YOLOv11, the latest iteration of the You Only Look Once (YOLO) object detection framework, enhances security by accurately detecting unauthorized access, unattended objects, and unusual human behavior in real-time. The model will be trained on university-specific surveillance footage to improve detection efficiency and reduce false alarms. This project will employ deep learning architectures such as YOLOv11, OpenCV, and TensorFlow/PyTorch to create a highly responsive and automated security solution.'
    },
    {
      title: 'Development of an ML-Based Detection System for Insider Threats in Cloud Environments',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Asifullah Khan',
      students: 'Mr. Ali Raza, Mr. Muhammad Hammad Tahir, Mr. Muhammad Talal Haider',
      description: 'This project aims to build a system to detect insider threats in cloud environments using machine learning (ML). Insider threats involve malicious or negligent actions by authorized users within an organization, which can lead to data breaches, data leaks, or system compromises. The system will analyze user activity in cloud platforms (e.g., AWS, Azure) to identify suspicious behavior and flag potential threats in real-time.'
    },
    {
      title: 'Development of a Real-Time Human Pose based Threat Intelligence System',
      lab: 'Deep Learning Lab',
      supervisor: 'Dr. Asifullah Khan',
      students: 'Ms. Hafsa , Ms. Hajra , Ms. Zainab Tariq',
      description: 'This project focuses on developing a real-time pose-based behavior classification system for enhanced security monitoring by leveraging advanced computer vision and machine learning techniques. It aims to accurately estimate human body keypoints from surveillance video, extract discriminative pose features such as joint angles and motion trajectories, and classify behaviors into categories such as normal, suspicious, or aggressive using trained machine learning models. The system integrates pose estimation frameworks (e.g., OpenPose or PoseNet) with classification models built using tools like OpenCV, TensorFlow, or PyTorch, enabling continuous analysis of live video streams and automatic alert generation upon detection of abnormal activities. Applicable to domains such as crowd surveillance, perimeter security, retail loss prevention, and workplace safety, the project ultimately seeks to improve situational awareness and response effectiveness by providing timely, reliable detection of potentially threatening human behaviors.'
    },

    // Computer Vision Lab
    {
      title: 'Virtual Assistant for Medicine',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Naeem Akhtar',
      students: 'Mr. Muhammad Ali Qadri, Mr. Muhammad Umar Riaz',
      description: 'This project aims to develop a virtual assistant that can understand, interpret, and provide recommendations based on multi-modal data, including text, reports, and images (e.g., X-rays).'
    },
    {
      title: 'Augmented Reality-based Navigator',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Naeem Akhtar',
      students: 'Mr. Subhan Amjad, Mr. Muhammad Musa, Mr. Muhammad Huzaifa Bilal',
      description: 'This project aims to develop an AR-based virtual assistant to help people navigate their environment. The navigator will recognize scenes and provide guidance. It can be used by visitors as well as individuals with impaired vision.'
    },
    {
      title: 'Escaping Robot from Combat',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Naeem Akhtar',
      students: 'Mr. Muneeb Waheed, Mr. Rayan Ahmed',
      description: 'Combat refers to a scenario in which a robot or a person tests their strength and abilities in an arena until the opposing robot is immobilized or stuck. This project aims to train an autonomous robot to avoid or escape combat initiated by a human.'
    },
    {
      title: 'Robotic Arm Manipulation using Vision-Language-Action Model',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Naeem Akhtar',
      students: 'Ms. Urwah Rasheed, Ms. Wajeeha Jahangir',
      description: 'Given a language instruction and a camera image of the robot workspace, the goal is to predict the robot actions—(x, y, z, roll, pitch, yaw, gripper)—and control a robotic arm to execute the instruction, such as picking up and placing items.'
    },
    {
      title: 'Text-based Robotic Navigation using Vision-and-Language Model',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Naeem Akhtar',
      students: 'Ms. Alishbah Bashir , Ms. Nida Pervaiz',
      description: 'Given a high-level textual instruction for navigating within a scene, the goal is to execute this instruction to guide an embodied device (such as a robot or unmanned ground vehicle). A large language model (LLM) will parse the natural language instruction into a sequence of landmarks, which serve as intermediary subgoals for navigation. A vision-and-language model will then be used to ground the robot’s visual observations to these landmark phrases.'
    },
    {
      title: 'Virtual Agent for Real Estate',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Naeem Akhtar',
      students: 'Mr. Muhammad Ahsan Ali, Ms. Hanana Asif',
      description: 'Virtual Agent for Real Estate is an AI based Virtual Reality solution for Real Estate Business. This system primarily includes a context-aware Virtual Agent trained on real estate datasets, architectural layouts, pricing trends, and buyer preferences. This Agent is a Digital Twin of a real estate agent designed to replicate the knowledge, behavior and interactive capabilities of a human agent during property tours. It guides the users through home tours of 3D VR models of residential properties. Users can explore realistic digital replicas of homes with interactive navigation. The Virtual agent offers voice-enabled guided tours; answering questions, highlighting features, and suggesting properties based on the user interests. The aim of this project is to bring the real estate business to virtual  platforms to make the process easier and less stressful. It will help people who can not visit properties in person. Just like shopping has moved to online platforms, real estate also needs to move into virtual reality'
    },
    {
      title: 'Multi-Modal Forgery Detection in Identity Documents',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Naeem Akhtar',
      students: 'Ms. Bushra Fatima, Ms. Noor Fatima',
      description: 'Identity document forgery involves altering a legitimate identity document to impersonate someone else. The objective of this project is to detect such forgeries by analyzing both textual and visual elements of the document.'
    },
    {
      title: 'Estimating Cognitive Load Using BCI',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Naeem Akhtar',
      students: 'Ms. Eshal Ali, Ms. Hadiqa Abdul Sattar Nadeem',
      description: 'This project aims to measure cognitive load through Brain-Computer Interface (BCI) technology. Such advancements will enhance applications in areas like e-learning, augmented and virtual reality, conversational and social AI, and skill development (e.g., driving).'
    },
    {
      title: 'AI Motion Capture for Personalized Fitness Training',
      lab: 'Computer Vision Lab',
      supervisor: 'Dr. Naeem Akhtar',
      students: 'Mr. Aamiroon Ishaq, Mr. Rehman Ashraf , Mr. Zohaib Ali Singay',
      description: 'AI Motion Capture for Personalized Fitness Training. Project Description: This Final Year Project is being developed in collaboration with TrueID, a company based in NUST Science and Technology Park (NSTP). The goal is to build an AI-powered Virtual Fitness Coach that uses webcam based motion capture to provide real-time feedback to users during home workouts—without the need for expensive or specialized hardware. Using advanced computer vision and pose estimation techniques, the system will detect human body posture through a regular webcam and compare it with ideal exercise forms. It will offer real-time audio and visual feedback like "Straighten your back" or "Lower your hips," helping users maintain proper form and reduce injury risk. The application will also include performance scoring, progress tracking, and motivational insights, making it suitable for users without access to in-person trainers. Unlike existing systems that rely on smart mirrors, motion sensors, or high-end devices, this solution focuses on affordability, accessibility, and ease of use. Technologies used include real-time pose estimation, machine learning for posture analysis, and a responsive user interface for engagement. The project bridges intelligent software and physical fitness, contributing to a smarter, healthier digital lifestyle.'
    },

    // Bioinformatics Lab
    {
      title: 'Development of AI/ML based Fake video detection systemenomeVis: Interactive Genome Visualization and Analysis Platform',
      lab: 'Bioinformatics Lab',
      supervisor: 'Dr. Abdul Majid',
      students: 'Mr. Muhammad Naveed Akhtar, Mr. Shahzaib Khan',
      description: 'This project aims to develop a deepfake detection system using deep neural networks to address the growing threat posed by manipulated videos to information authenticity and national security. By integrating optical features with transdermal optical imaging, the system will analyze visual cues such as unnatural facial movements and inconsistencies in blood flow and vein patterns derived from hemoglobin concentration changes in facial videos. The overall framework includes data collection, deep learning–based model development, and rigorous system evaluation to effectively distinguish real videos from deepfakes. By enhancing the reliability of media verification, the proposed solution seeks to counter misinformation, protect national security interests, and strengthen trust in digital content.'
    },
    {
      title: 'Web App development for Drug-Target Interactions using ML/AI techniques',
      lab: 'Bioinformatics Lab',
      supervisor: 'Dr. Abdul Majid',
      students: 'Mr. Muhammad Asim Nawaz, Mr. Syed Hassan Raza',
      description: 'This project focuses on leveraging machine learning techniques to predict drug–target interactions, a critical task in pharmacology that supports efficient and cost-effective drug discovery. By collecting and preprocessing a comprehensive dataset of known drug–target interactions, the project aims to develop and evaluate multiple machine learning models capable of accurately predicting interactions between drugs and target proteins. The performance of various algorithms will be systematically assessed using appropriate evaluation metrics, with the best-performing model further optimized and validated. The successful outcome of this work is expected to advance pharmacological research by enabling more reliable identification of potential drug targets and supporting the development of new therapeutic drugs.'
    },
    {
      title: 'Development of eyestrike drone for dynamic target engagement',
      lab: 'Bioinformatics Lab',
      supervisor: 'Dr. Abdul Majid',
      students: 'Mr. Abdul Moiz , Mr. Hafiz Shoaib Mehmood',
      description: 'This project proposes the development of an AI-powered autonomous drone system capable of detecting, identifying, and continuously tracking a specific individual within crowded environments. The system will employ deep neural network–based facial verification for person-specific identification, combined with advanced tracking methods such as DeepSORT and potentially reinforcement learning–based approaches to ensure robust and persistent surveillance. Navigation and control will integrate path planning strategies, including Boustrophedon search, along with potential field–based obstacle avoidance to enable safe operation in dynamic, cluttered settings. System performance will be evaluated in realistic simulation environments such as AirSim or Gazebo, enhanced with custom Unreal Engine crowd scenarios. Overall, the project emphasizes the integration of sensing, planning, and control to advance AI-driven surveillance, autonomous navigation, and human-tracking technologies using state-of-the-art tracking algorithms.'
    },

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