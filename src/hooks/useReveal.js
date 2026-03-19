import { useEffect, useRef } from 'react';

/**
 * Hook to trigger a CSS reveal animation when element scrolls into view.
 * Usage:
 * const revealRef = useReveal();
 * <div ref={revealRef} className="reveal">Content</div>
 * 
 * Works well with multiple elements if attached individually, 
 * or by observing children if attached to a container.
 */
export const useReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const defaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const config = { ...defaultOptions, ...options };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Look for child elements with .reveal if the container itself isn't the only target
          const childReveals = entry.target.querySelectorAll('.reveal');
          childReveals.forEach(child => child.classList.add('active'));
          
          // Trigger once
          observer.unobserve(entry.target);
        }
      });
    }, config);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return ref;
};
