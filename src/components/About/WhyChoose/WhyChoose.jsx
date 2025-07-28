// src/components/WhyChoose.js
import React from 'react';
import './WhyChoose.css';
import { FaUserCircle, FaRibbon, FaHeart } from 'react-icons/fa';

const WhyChoose = () => {
  return (
    <section className="why-section">
      <p className="why-subtitle">Our Approach</p>
      <h2 className="why-title">Why Choose Leicester Dog Grooming?</h2>
      <p className="why-description">
       We offer expert grooming with a gentle touch, personalised care for every dog, and a commitment to quality that keeps tails wagging. From first-timers to regulars, we make every visit stress-free and enjoyable.
      </p>

      <div className="why-cards">
        <div className="why-card">
          <FaUserCircle className="why-icon" />
          <h3>Passionate Team</h3>
          <p>
           At Leicester Dog Grooming, our team isn’t just experienced — we’re dog lovers through and through. Every groomer is dedicated to delivering the highest level of care and comfort for your pet. 
           We treat every dog like our own and are passionate about raising the standards of grooming and canine welfare.
          </p>
        </div>

        <div className="why-card">
          <FaRibbon className="why-icon" />
          <h3>Fully Qualified & Trusted</h3>
          <p>
            In an industry with little regulation, we stand out. Our team is fully qualified and accredited by 
            respected organizations such as the <strong> International Pet Groomers (IPG) </strong>and <strong>City & Guilds.</strong> You can rest
            assured knowing your dog is in the hands of certified professionals who uphold the highest 
            standards in grooming and animal care.
          </p>
        </div>

        <div className="why-card">
          <FaHeart className="why-icon" />
          <h3>Specialized Grooming Services</h3>
          <p>
           We offer a range of <strong> specialized grooming packages </strong>tailored to meet your dog’s unique needs — from 
           breed-specific styling to coat-specific treatments. 
           Whether your dog needs a simple tidy-up or a full transformation, we’ve got the expertise to do it right.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
