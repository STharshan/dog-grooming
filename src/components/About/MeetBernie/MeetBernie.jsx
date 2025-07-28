import React from 'react';
import './MeetBernie.css';
import { FiCheckCircle } from "react-icons/fi";


const MeetBernie = () => {
  return (
    <section className="bernie-section">
      <div className="bernie-container">
        <h2 className="bernie-title">Meet Bernie</h2>
        <p>With over two decades of experience in professional dog grooming, Bernie Broadway is a certified master groomer known for her expert care, gentle handling, and dedication to excellence. After running a successful grooming salon for 15 years, Bernie established <strong>Leicester Dog Grooming - </strong>a place where pets receive high-quality grooming in a relaxed, stress-free environment.</p>
        <p>Bernie leads a team committed to <strong>kind, professional grooming </strong> that prioritizes your dog’s comfort and well-being. We operate a <strong>no-crate system, </strong>use gentle techniques, and uphold the highest industry standards. Whether your dog needs a full groom, breed-specific styling, or just a fresh trim, you can trust us to deliver expert care every time.</p>
        <p>Bernie holds a range of prestigious qualifications, including:</p>

        <ul className="bernie-list">
          <li><FiCheckCircle className="check-icon" /> <strong>International Certification of Master Groomers (ICMG)</strong> – near completion</li>
          <li><FiCheckCircle className="check-icon" /> <strong>City & Guilds Level 2 & 3 </strong> in Dog Grooming</li>
          <li><FiCheckCircle className="check-icon" /> <strong>BDGA Professional Stylist Qualification</strong></li>
          <li><FiCheckCircle className="check-icon" /> <strong>TAGA Level 3 Assessor Qualification</strong></li>
          <li><FiCheckCircle className="check-icon" /> <strong>PTLLS Level 3 Teaching Qualification</strong></li>
          <li><FiCheckCircle className="check-icon" /> <strong>IPG & SDC International Grooming Certifications</strong></li>
        </ul>

        <p className="bernie-quote">
          <em>“Her lifelong commitment to animal welfare, industry standards, and grooming excellence is the foundation of everything we do at Leicester Dog Grooming.”</em>
        </p>
      </div>
    </section>
  );
};

export default MeetBernie;