// src/components/CallToAction.js
import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-heading">Ready to Begin Your Dog Grooming</h2>
      <h2 className="cta-heading">Journey?</h2>
      <p className="cta-text">
        Contact us today to learn more about our courses and start your path to becoming a professional dog groomer.
      </p>
      <a href="#contact" className="cta-button1">Get in Touch</a>
    </section>
  );
};

export default CallToAction;
