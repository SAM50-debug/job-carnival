import React from 'react';
import { eventConfig } from '../data/eventConfig';
import { useReveal } from '../hooks/useReveal';
import './LogoMarquee.css';

const LogoMarquee = () => {
  const { companies } = eventConfig;
  const sectionRef = useReveal();

  if (!companies || companies.length === 0) return null;

  // Duplicate the array for a seamless infinite loop
  const marqueeLogos = [...companies, ...companies];

  return (
    <section className="logo-marquee-section reveal" ref={sectionRef}>
      <div className="logo-marquee-container">
        <div className="logo-marquee-track">
          {marqueeLogos.map((company, index) => (
            <div key={`${company.id}-${index}`} className="logo-marquee-item">
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="logo-marquee-img hover-logo" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
