import React from 'react';
import CompanyCard from './CompanyCard';
import { useReveal } from '../hooks/useReveal';
import './CompanyGrid.css';

const CompanyGrid = ({ companies }) => {
  const sectionRef = useReveal();
  return (
    <section className="company-section reveal" ref={sectionRef}>
      <div className="company-container">
        <h2 className="company-section-title">Hiring Partners</h2>
        <p className="company-section-desc">Top recruiters participating in the event</p>
        <div className="company-grid">
          {companies?.map((company, index) => (
            <CompanyCard 
              key={company.id}
              name={company.name}
              logo={company.logo}
              roles={company.roles}
              jd={company.jd}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyGrid;
