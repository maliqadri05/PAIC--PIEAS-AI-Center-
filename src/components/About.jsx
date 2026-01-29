import React from 'react';
import { Starfield } from '../App';
import '../styles/About.css';

const About = () => {
  const timeline = [
    {
      year: '2018',
      title: 'PAIC Founded',
      description: 'Establishment of PIEAS Artificial Intelligence Center as a hub for cutting-edge AI research and innovation.'
    },
    {
      year: '2019',
      title: 'First Research Labs',
      description: 'Launch of specialized laboratories focused on deep learning, computer vision, and autonomous systems.'
    },
    {
      year: '2020',
      title: 'Expansion Phase',
      description: 'Addition of robotics and cybersecurity research groups. International collaborations established.'
    },
    {
      year: '2021',
      title: 'Center of Excellence',
      description: 'Recognition as leading AI research institution in Pakistan with multiple breakthrough publications.'
    },
    {
      year: '2022',
      title: 'Global Recognition',
      description: 'International partnerships with top universities. Award for innovative AI research and applications.'
    },
    {
      year: '2023',
      title: 'Research Excellence',
      description: 'Launch of advanced biomedical informatics lab and expanded industry collaborations.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      icon: '💡',
      description: 'Pushing boundaries of AI research with novel approaches and cutting-edge solutions.'
    },
    {
      title: 'Collaboration',
      icon: '🤝',
      description: 'Working together across disciplines, institutions, and industries to solve complex problems.'
    },
    {
      title: 'Excellence',
      icon: '⭐',
      description: 'Maintaining highest standards of research quality, ethics, and professional integrity.'
    },
    {
      title: 'Impact',
      icon: '🎯',
      description: 'Creating practical solutions that benefit society and advance technological progress.'
    }
  ];

  return (
    <div className="about">
      <Starfield />
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header animate-fadeIn">
          <h1 className="about-title animate-slideDown">
            About PAIC
          </h1>
          <p className="about-subtitle animate-slideUp">
            Pioneering Artificial Intelligence Research in Pakistan
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="mission-vision-section animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="mission-card animate-slideUp">
            <div className="card-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>
              To advance artificial intelligence research and innovation through world-class facilities, 
              talented researchers, and collaborative projects that address real-world challenges and contribute 
              to Pakistan's technological advancement on the global stage.
            </p>
          </div>

          <div className="vision-card animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="card-icon">🚀</div>
            <h2>Our Vision</h2>
            <p>
              To be a leading center of excellence in artificial intelligence research, recognized globally 
              for transformative innovations in deep learning, computer vision, autonomous systems, robotics, 
              and emerging AI technologies that create lasting positive impact.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="values-section animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div 
                key={idx} 
                className="value-card animate-scaleUp"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History Timeline */}
        <div className="timeline-section animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {timeline.map((event, idx) => (
              <div 
                key={idx}
                className="timeline-item animate-slideUp"
                style={{ animationDelay: `${0.05 * idx}s` }}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">{event.year}</div>
                </div>
                <div className="timeline-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="achievements-section animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card animate-scaleUp">
              <div className="achievement-number">50+</div>
              <p>Research Publications</p>
            </div>
            <div className="achievement-card animate-scaleUp" style={{ animationDelay: '0.1s' }}>
              <div className="achievement-number">30+</div>
              <p>Active Researchers</p>
            </div>
            <div className="achievement-card animate-scaleUp" style={{ animationDelay: '0.2s' }}>
              <div className="achievement-number">15+</div>
              <p>Specialized Labs</p>
            </div>
            <div className="achievement-card animate-scaleUp" style={{ animationDelay: '0.3s' }}>
              <div className="achievement-number">25+</div>
              <p>Industry Partnerships</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta animate-fadeIn" style={{ animationDelay: '1s' }}>
          <h2>Ready to Join Our Team?</h2>
          <p>Explore opportunities to contribute to cutting-edge AI research and innovation.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-btn primary">Get In Touch</a>
            <a href="/labs" className="cta-btn secondary">Explore Our Labs</a>
          </div>
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

export default About;
