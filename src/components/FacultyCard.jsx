import React from 'react';
import '../styles/Home.css';

const FacultyCard = ({ faculty }) => {
  const { name, title, qualification, email, image } = faculty;

  return (
    // reuse the home-card styles so faculty cards match other cards
    <div className="faculty-card home-card hover-card">
      <div className="faculty-media">
        <img src={image || '/paic-logo.png'} alt={`${name} photo`} />
      </div>
      <div className="faculty-body">
        <h4 className="faculty-name">{name}</h4>
        <p className="faculty-title">{title}</p>
        <p className="faculty-qualification">{qualification}</p>
        {email && <a className="faculty-email" href={`mailto:${email}`}>{email}</a>}
      </div>
    </div>
  );
};

export default FacultyCard;
