import React, { useState } from 'react';
import { Starfield } from '../App';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };
  
  return (
    <div className="contact">
      <Starfield />
      <div className="contact-container">
        <h1 className="contact-title animate-fadeIn">
          Contact Us
          </h1>
        
        <div className="contact-grid">
          <div className="contact-info-card animate-fadeIn">
            <h2>Get In Touch</h2>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <h3>📍 Address</h3>
                <p>PIEAS, Nilore, Islamabad, Pakistan</p>
              </div>
              <div className="contact-info-item">
                <h3>📧 Email</h3>
                <p>paic@pieas.edu.pk</p>
              </div>
              <div className="contact-info-item">
                <h3>📞 Phone</h3>
                <p>+92-51-111-743-277</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-card animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h2>Send Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message subject"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="4"
                />
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
