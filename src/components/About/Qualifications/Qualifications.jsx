// src/components/Qualifications.js
import React from 'react';
import './Qualifications.css';

const qualifications = [
  "International Certification of Master Groomer",
  "City & Guilds Level 2 (7763–02) Dog Grooming Assistant",
  "City & Guilds Level 3 (7763–03) Introductory In Dog Grooming",
  "BDGA Professional Stylist Qualifications (Spaniel, Schnauzer & Scottish Terrier)",
  "BDGA Higher Diploma Written paper",
  "TAQA Level 3 Assessor Qualification",
  "PTLLS Level 3 Teaching Qualification",
  "SDC and IPG International Qualification"
];

const Qualifications = () => {
  return (
    <section className="qualifications-section">
      <div className="qualifications-grid">
        {qualifications.map((item, index) => (
          <div key={index} className="qualification-card">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualifications;
