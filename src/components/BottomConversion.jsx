import React from 'react';
import { eventConfig } from '../data/eventConfig';
import { useReveal } from '../hooks/useReveal';
import './BottomConversion.css';

const BottomConversion = () => {
  const sectionRef = useReveal();
  return (
    <section className="bottom-conversion-section reveal" ref={sectionRef}>
      <div className="bottom-conversion-container">
        <h2 className="bottom-conversion-title">Still thinking? Secure your spot before it's gone.</h2>
        
        <div className="bottom-conversion-action">
          <a 
            href={eventConfig.event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-conversion-cta"
          >
            Register Now &ndash; Limited Seats
          </a>
          <p className="bottom-conversion-trust-line">
            Free registration &bull; No hidden charges
          </p>
        </div>
      </div>
    </section>
  );
};

export default BottomConversion;
