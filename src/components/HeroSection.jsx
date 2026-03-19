import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import rimtLogo from "../assets/branding/rimt.jpg";
import driLogo from "../assets/branding/dri.jpg";

const HeroSection = ({ eventName, dates, registrationLink }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = sectionRef.current.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      {/* Video Background */}
      <video
        className="hero-video-bg"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/video/hero-fallback.gif"
      >
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay to ensure text legibility over any video */}
      <div className="hero-overlay"></div>
      
      {/* Absolute Positioned Logos */}
      <a 
        href="https://rimt.ac.in/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="university-logo-link reveal"
        style={{ transitionDelay: '0.1s' }}
      >
        <img 
          src={rimtLogo}
          alt="RIMT University Logo" 
          className="hero-logo-img university-logo hover-logo"
        />
      </a>
      
      <div className="dri-logo-container reveal" style={{ transitionDelay: '0.2s' }}>
        <img 
          src={driLogo}
          alt="DRI Logo" 
          className="hero-logo-img dri-logo hover-logo"
        />
      </div>

      <div className="hero-content">
        <p className="hero-subtitle reveal" style={{ transitionDelay: '0.3s' }}>Hiring Event</p>
        <h1 className="hero-title reveal" style={{ transitionDelay: '0.4s' }}>{eventName}</h1>
        <p className="hero-dates reveal" style={{ transitionDelay: '0.5s' }}>{Array.isArray(dates) ? dates.join(' - ') : ''}</p>
        
        <p className="hero-urgency-text reveal" style={{ transitionDelay: '0.6s' }}>
          Limited seats available &bull; Filling fast
        </p>
        
        <a 
          href={registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta reveal hover-lift"
          style={{ transitionDelay: '0.7s' }}
        >
          Register Now &ndash; Limited Seats
        </a>

        <p className="hero-trust-line reveal" style={{ transitionDelay: '0.8s' }}>
          Free registration &bull; No hidden charges
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
