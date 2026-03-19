import React from 'react';
import { eventConfig } from '../data/eventConfig';
import { useReveal } from '../hooks/useReveal';
import './WhyAttend.css';

const WhyAttend = () => {
  const sectionRef = useReveal();
  const benefits = [
    {
      title: "Top Companies Hiring",
      description: "Connect with leading recruiters across industries",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      title: "Multiple Roles Available",
      description: "Apply for diverse roles matching your skills",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Real Interview Opportunities",
      description: "Participate in actual hiring interviews",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      title: "Limited Seats – Register Early",
      description: "Secure your slot before registrations close",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="why-attend-section reveal" ref={sectionRef}>
      <div className="why-attend-container">
        <h2 className="why-attend-title">Why Attend?</h2>
        <div className="why-attend-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="why-attend-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="why-attend-icon">
                {benefit.icon}
              </div>
              <h3 className="why-attend-card-title">{benefit.title}</h3>
              <p className="why-attend-card-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <a 
          href={eventConfig.event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="why-attend-soft-cta"
        >
          Secure your spot now &rarr;
        </a>
      </div>
    </section>
  );
};

export default WhyAttend;
