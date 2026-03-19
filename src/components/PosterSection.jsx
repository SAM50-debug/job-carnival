import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { useModal } from '../hooks/useModal';
import PosterModal from './PosterModal';
import './PosterSection.css';

const PosterSection = () => {
  const sectionRef = useReveal();
  const { isOpen, modalData, openModal, closeModal } = useModal();

  // Configuration for the two posters.
  const posters = [
    {
      id: 1,
      src: "/poster.jpeg", // Using standard poster
      alt: "Event Poster Primary",
    },
    {
      id: 2,
      src: "/poster2.jpeg", // Using standard poster duplicate
      alt: "Event Poster Secondary",
    }
  ];

  return (
    <>
      <section className="poster-section section-wrapper" ref={sectionRef}>
        <div className="container poster-grid">
          {posters.map((poster, index) => {
            return (
              <div 
                key={poster.id}
                className="poster-card reveal hover-card"
                // Adding a 0.15s stagger as requested (0.1-0.2s difference)
                style={{ transitionDelay: `${index * 0.15}s` }}
                onClick={() => openModal(poster)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(poster);
                  }
                }}
              >
                <img 
                  src={poster.src} 
                  alt={poster.alt} 
                  className="poster-img" 
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </section>

      <PosterModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        posterData={modalData} 
      />
    </>
  );
};

export default PosterSection;
