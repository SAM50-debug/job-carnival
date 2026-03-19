import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';
import { useReveal } from '../hooks/useReveal';

const Timeline = ({ stages }) => {
  const sectionRef = useReveal();
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Scroll Progress Line logic
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start filling somewhat early when container enters view
      const triggerPoint = windowHeight * 0.7; 
      const start = rect.top - triggerPoint;
      const totalHeight = rect.height;
      
      let newProgress = (start * -1) / totalHeight;
      newProgress = Math.max(0, Math.min(1, newProgress)); // clamp
      
      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // 2. IntersectionObserver for Active Item Highlights
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            // Remove effect when out of view per requirements
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.3, // Trigger comfortably ahead
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [stages]);

  return (
    <section className="timeline-section reveal" ref={sectionRef}>
      <div className="timeline-container">
        <h2 className="timeline-title">Event Timeline</h2>
        
        <div className="timeline-wrapper" ref={containerRef}>
          {/* Scroll Progress Line background layer */}
          <div className="timeline-track-base"></div>
          
          {/* Active Filling Progress Line layer */}
          <div 
            className="timeline-track-fill" 
            style={{ '--progress': progress }}
          ></div>
          
          {stages?.map((stage, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'even' : 'odd'}`}
            >
              <div className="timeline-node"></div>
              <div className="timeline-content">
                <h3 className="timeline-stage-title">{stage.title}</h3>
                <p className="timeline-stage-date">{stage.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
