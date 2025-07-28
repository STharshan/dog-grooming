import React from "react";
import "./DogGroomingCTA.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DogGroomingCTA() {

  const navigate = useNavigate();
  const handleContact = () => navigate('/contact')

  return (
    <div className="cta-section">
      <h2 className="cta-title">Ready to Pamper Your Pup?</h2>
      <p className="cta-subtitle">
       Book your dog’s grooming appointment today and treat them to a professional, stress-free experience they’ll love. <br/> (remove the view course date cta and keep contact us)
      </p>
      <div className="cta-buttons">
        <button className="cta-btn secondary" onClick={handleContact}>Contact Us</button>
        <button className="cta-btn primary">
          <span className="icon1"><FaCalendarAlt /></span> View Course Schedule
        </button>
      </div>
    </div>
  );
}
