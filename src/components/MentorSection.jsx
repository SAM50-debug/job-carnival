import React from 'react';
import { eventConfig } from '../data/eventConfig';
import './MentorSection.css';

const MentorSection = () => {
  const { mentors } = eventConfig;

  if (!mentors || mentors.length === 0) return null;

  return (
    <section className="mentor-section">
      <div className="mentor-container">
        <h2 className="mentor-title">Meet the Speakers</h2>
        <div className="mentor-grid">
          {mentors.map((mentor, index) => (
            <div 
              key={`${mentor.name}-${index}`} 
              className="mentor-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mentor-avatar-wrapper">
                {mentor.image ? (
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="mentor-avatar" 
                  />
                ) : (
                  <div className="mentor-avatar-placeholder"></div>
                )}
              </div>
              <h3 className="mentor-name">{mentor.name}</h3>
              <p className="mentor-role">{mentor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
