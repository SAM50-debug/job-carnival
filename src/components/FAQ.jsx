import React, { useState } from 'react';
import { eventConfig } from '../data/eventConfig';
import { useReveal } from '../hooks/useReveal';
import './FAQ.css';

const FAQ = () => {
  const { faqs } = eventConfig;
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useReveal();

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index) => {
    // If the clicked index is already open, close it (null). Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section reveal" ref={sectionRef}>
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = openIndex === index;
            
            return (
              <div 
                key={`${faq.question}-${index}`} 
                className={`faq-item ${isActive ? 'active' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                >
                  {faq.question}
                  <svg 
                    className="faq-icon" 
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
