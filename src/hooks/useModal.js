import { useState, useCallback, useEffect } from 'react';

/**
 * Hook to manage modal state, including open/close handlers,
 * escape key listener, and body scroll locking.
 */
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [modalData, setModalData] = useState(null);

  const openModal = useCallback((data = null) => {
    setModalData(data);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent body scroll
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = ''; // Restore body scroll
    
    // Clear data after animation completes to avoid visual jump
    setTimeout(() => {
      setModalData(null);
    }, 300);
  }, []);

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  return {
    isOpen,
    modalData,
    openModal,
    closeModal
  };
};
