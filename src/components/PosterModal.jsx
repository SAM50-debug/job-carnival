import React from 'react';
import './PosterModal.css';

const PosterModal = ({ isOpen, onClose, posterData }) => {
  if (!isOpen && !posterData) return null;

  // Handle click outside of the modal content
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('poster-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div 
      className={`poster-modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <button 
        className="poster-modal-close" 
        onClick={onClose}
        aria-label="Close modal"
      >
        &times;
      </button>

      <div className={`poster-modal-content ${isOpen ? 'open' : ''}`}>
        {posterData && (
          <img 
            src={posterData.src} 
            alt={posterData.alt} 
            className="poster-modal-img" 
          />
        )}
      </div>
    </div>
  );
};

export default PosterModal;
