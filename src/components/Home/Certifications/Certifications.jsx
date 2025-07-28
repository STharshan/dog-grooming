// File: src/components/Certifications.js
import React from "react";
import "./Certifications.css";
import home1 from "../../../assets/Home1.png";
import home2 from "../../../assets/Home2.png";
import home3 from "../../../assets/Home3.png";      
import home4 from "../../../assets/Home4.png";
import home5 from "../../../assets/Home5.png";

const Certifications = () => {
  return (
    <section className="certifications">
      <h4 className="credentials">Credentials</h4>
      <h2 className="title1">Our Qualifications & Certifications</h2>
      <p className="description1">
        We're proud to hold industry-recognized certifications that demonstrate our commitment to excellence in dog grooming education.
      </p>
      <div className="logos1">
        <img src={home1} alt="British Dog Groomers Association" />
        <img src={home2} alt="City & Guilds NPTC" />
        <img src={home3} alt="Pet Industry Federation" />
        <img src={home4} alt="ICMG UK" />
        <img src={home5} alt="IPG" />
      </div>
    </section>
  );
};

export default Certifications;
