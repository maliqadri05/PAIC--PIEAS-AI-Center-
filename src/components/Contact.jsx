import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <section className="contact-section">
      {/* Contact information section */}
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div>
          <strong>Address:</strong>
          <div>PIEAS, Nilore, Islamabad, Pakistan</div>
        </div>
        <div>
          <strong>Email:</strong>
          <div>paic@pieas.edu.pk</div>
        </div>
        <div>
          <strong>Phone:</strong>
          <div>+92-51-111-743-277</div>
        </div>
      </div>

      {/* Contact form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;