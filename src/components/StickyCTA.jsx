import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './StickyCTA.css';

const StickyCTA = ({ registrationLink }) => {
  const sectionRef = useReveal();
  return (
    <div className="sticky-cta-wrapper reveal" ref={sectionRef}>
      <div className="sticky-cta-container">
        <div className="sticky-cta-content">
          <span className="sticky-cta-urgency">Filling fast</span>
          <p className="sticky-cta-text">Mega Job Fest is live</p>
        </div>
        <div className="sticky-cta-action-group">
          <a 
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-cta-button"
          >
            Register Now &ndash; Limited Seats
          </a>
          <p className="sticky-cta-trust-line">
            Free registration &bull; No hidden charges
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
