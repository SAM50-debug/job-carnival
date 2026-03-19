import React from 'react';
import './EventPosterSection.css';

const EventPosterSection = () => {
  return (
    <section className="poster-section">
      <div className="poster-image-wrapper">
        <img 
          src="/poster.jpg" 
          alt="Event Poster" 
          className="poster-img" 
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default EventPosterSection;
