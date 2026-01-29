import React, { useState } from 'react';
import { Starfield } from '../App';
import '../styles/Events.css';

const Events = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const currentEvents = [
    {
      id: 1,
      title: 'AI in Healthcare: Opportunities and Challenges',
      date: '2025-02-15',
      time: '10:00 AM - 1:00 PM',
      location: 'PIEAS Main Auditorium',
      type: 'Seminar',
      speaker: 'Dr. Sarah Khan',
      description: 'A comprehensive seminar on the current applications of AI in healthcare, ethical considerations, and future opportunities for researchers and practitioners.',
      capacity: 150,
      registered: 127,
      tags: ['Healthcare', 'AI', 'Deep Learning']
    },
    {
      id: 2,
      title: 'Advanced Deep Learning Workshop',
      date: '2025-02-20',
      time: '2:00 PM - 5:00 PM',
      location: 'PIEAS Computer Lab 3',
      type: 'Workshop',
      speaker: 'Prof. Ahmed Hassan',
      description: 'Hands-on workshop covering advanced deep learning architectures, transfer learning, and practical implementations using PyTorch and TensorFlow.',
      capacity: 50,
      registered: 48,
      tags: ['Deep Learning', 'Workshop', 'PyTorch']
    },
    {
      id: 3,
      title: 'Autonomous Systems and Robotics Showcase',
      date: '2025-02-28',
      time: '11:00 AM - 3:00 PM',
      location: 'PIEAS Robotics Lab',
      type: 'Showcase',
      speaker: 'Dr. Muhammad Khalid',
      description: 'Live demonstration of autonomous robots and systems developed by PAIC researchers. Interactive sessions and Q&A with research teams.',
      capacity: 100,
      registered: 89,
      tags: ['Robotics', 'Autonomous Systems', 'Showcase']
    },
    {
      id: 4,
      title: 'Research Collaboration Summit 2025',
      date: '2025-03-10',
      time: '9:00 AM - 4:00 PM',
      location: 'PIEAS Convention Center',
      type: 'Conference',
      speaker: 'Multiple Speakers',
      description: 'Annual summit bringing together researchers, industry leaders, and international collaborators to discuss emerging trends and opportunities in AI research.',
      capacity: 300,
      registered: 241,
      tags: ['Conference', 'Collaboration', 'Networking']
    }
  ];

  const upcomingEvents = [
    {
      id: 5,
      title: 'Computer Vision in Autonomous Vehicles',
      date: '2025-03-25',
      time: '2:00 PM - 4:00 PM',
      location: 'PIEAS Seminar Hall',
      type: 'Talk',
      speaker: 'Dr. Fatima Ahmed',
      description: 'Guest lecture on state-of-the-art computer vision techniques for autonomous vehicle perception and decision-making systems.',
      capacity: 80,
      registered: 0,
      tags: ['Computer Vision', 'Autonomous Vehicles']
    },
    {
      id: 6,
      title: 'Cybersecurity in Machine Learning',
      date: '2025-04-05',
      time: '10:00 AM - 12:00 PM',
      location: 'PIEAS Conference Room',
      type: 'Seminar',
      speaker: 'Dr. Usman Khan',
      description: 'Exploring security vulnerabilities in machine learning systems and discussing best practices for building robust AI models.',
      capacity: 120,
      registered: 0,
      tags: ['Cybersecurity', 'Machine Learning']
    },
    {
      id: 7,
      title: 'Biomedical AI Research Symposium',
      date: '2025-04-20',
      time: '1:00 PM - 5:00 PM',
      location: 'PIEAS Main Auditorium',
      type: 'Symposium',
      speaker: 'Prof. Saira Khan',
      description: 'International symposium on AI applications in biomedical research, medical imaging, and healthcare informatics.',
      capacity: 200,
      registered: 0,
      tags: ['Biomedical', 'AI', 'Healthcare']
    }
  ];

  const toggleExpanded = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const EventCard = ({ event, upcoming = false }) => {
    const isExpanded = expandedEvent === event.id;
    const eventDate = new Date(event.date);
    const dayOfWeek = eventDate.toLocaleDateString('en-US', { weekday: 'short' });
    const monthDay = eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    return (
      <div
        className={`event-card animate-slideUp ${isExpanded ? 'expanded' : ''}`}
        onClick={() => toggleExpanded(event.id)}
      >
        <div className="event-date-badge">
          <div className="event-weekday">{dayOfWeek}</div>
          <div className="event-date">{monthDay}</div>
        </div>

        <div className="event-content">
          <div className="event-header">
            <div>
              <h3 className="event-title">{event.title}</h3>
              <div className="event-meta">
                <span className="event-type">{event.type}</span>
                <span className="event-location">📍 {event.location}</span>
              </div>
            </div>
          </div>

          <div className="event-details">
            <p className="event-time">🕐 {event.time}</p>
            <p className="event-speaker">👤 {event.speaker}</p>
            {!upcoming && (
              <div className="event-capacity">
                <span className="capacity-bar">
                  <span
                    className="capacity-fill"
                    style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                  />
                </span>
                <span className="capacity-text">
                  {event.registered}/{event.capacity} Registered
                </span>
              </div>
            )}
          </div>

          {isExpanded && (
            <div className="event-expanded">
              <p className="event-description">{event.description}</p>
              <div className="event-tags">
                {event.tags.map((tag, idx) => (
                  <span key={idx} className="event-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="event-action">
                <button className="register-btn">
                  {upcoming ? 'Register Interest' : 'View Details'}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="expand-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="events">
      <Starfield />
      <div className="events-container">
        {/* Header Section */}
        <div className="events-header animate-fadeIn">
          <h1 className="events-title animate-slideDown">
            Events & News
          </h1>
          <p className="events-subtitle animate-slideUp">
            Latest Seminars, Workshops, and Conferences
          </p>
        </div>

        {/* Current Events Section */}
        <div className="events-section animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <h2 className="section-title">Happening Now</h2>
          <div className="events-list">
            {currentEvents.map((event, idx) => (
              <div key={event.id} style={{ animationDelay: `${0.05 * idx}s` }}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="events-section animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <h2 className="section-title">Coming Soon</h2>
          <div className="events-list">
            {upcomingEvents.map((event, idx) => (
              <div key={event.id} style={{ animationDelay: `${0.05 * idx}s` }}>
                <EventCard event={event} upcoming={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to receive updates about upcoming events, seminars, and research announcements.</p>
          <form className="newsletter-form" onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
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

export default Events;
