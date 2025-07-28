// src/components/Hero.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./Hero.css";
import dogImg from "../../../assets/pexels-photo.jpeg";

const Hero = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleReadMore = () => {
    navigate("/services"); // ✅ Navigate to /services
  };

  return (
    <section className="hero1-section">
      <div className="hero1-content">
        <img src={dogImg} alt="Dog" className="hero1-image" />

        {/* Animated heading */}
        <div className="hero-animate delay-1">
          <h2 className="hero1-heading">
            <span className="text-blue">🐾 Paws-itively Passionate,</span>{" "}
          </h2>
          <h2 className="hero1-heading">
            <span className="text-pink">Surprisingly Affordable</span> 🐾
          </h2>
        </div>

        {/* Animated subheading */}
        <div className="hero-animate delay-2">
          <h2 className="hero1-subheading">
            ✨ <span className="text-yellow">The UK’s Best-Value Dog Grooming</span> ✨
          </h2>
        </div>

        {/* Animated description */}
        <div className="hero-animate delay-3">
          <p className="hero1-description">
            Discover why dog owners love our fun, friendly, and affordable grooming services.
            Trust our expert team to pamper your pup with care, style, and a wagging tail every time!
          </p>
        </div>

        {/* Animated button */}
        <button className="hero1-button" onClick={handleReadMore}>
          Read More
        </button>
      </div>
    </section>
  );
};

export default Hero;
