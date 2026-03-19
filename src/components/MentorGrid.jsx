import React from 'react';
import './MentorGrid.css';

const MentorGrid = ({ mentors }) => {
  if (!mentors || mentors.length === 0) return null;

  return (
    <section className="mentors-section">
      <div className="mentors-container">
        <h2 className="mentors-title">Meet the Speakers</h2>
        <div className="mentors-grid">
          {mentors.map((mentor, index) => (
            <div 
              key={`${mentor.name}-${index}`} 
              className="mentor-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mentor-card-content">
                <div className="mentor-avatar-wrapper">
                  {mentor.image ? (
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="mentor-avatar" 
                    />
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>No Image</span>
                  )}
                </div>
                <h3 className="mentor-name">{mentor.name}</h3>
                <p className="mentor-role">{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorGrid;
