// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h2 className="hero-title">
          Tails wag in, and struts walk out.<br className="line-break" />
          <span className="highlight">Because every pup deserves a good hair day.</span>
        </h2>
        <p className="hero-description">
          Leicester Dog Grooming offers professional grooming with personalised care in a warm,
          friendly environment your pup will love
        </p>
        <a href="/contact" className="hero-button">
          Book an Appointment <FiArrowRight className="hero-arrow" />
        </a>
      </div>

      {/* Fade transition to next section */}
      <div className="hero-fade"></div>
    </section>
  );
};

export default HeroSection;
