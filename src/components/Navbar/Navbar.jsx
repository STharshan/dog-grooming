import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><NavLink to="/" end className={({ isActive }) => (isActive ? "nav-active" : "")}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? "nav-active" : "")}>About</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => (isActive ? "nav-active" : "")}>Services</NavLink></li>
          <li><NavLink to="/gallery" className={({ isActive }) => (isActive ? "nav-active" : "")}>Gallery</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-active" : "")}>Contact</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-active" : "")}>Blog</NavLink></li>
          <li><NavLink to="/bookcourse" className={({ isActive }) => (isActive ? "nav-active" : "")}>Book Now</NavLink></li>
          
          {/* Phone number shown in dropdown for mobile */}
          <li className="mobile-phone">
            <FiPhone className="phone-icon" />
            <a href="tel:+447930549717">+44 7930 549 717</a>
          </li>
        </ul>

        {/* Phone number shown on desktop */}
        <div className="phone desktop-phone">
          <FiPhone className="phone-icon" />
          <a href="tel:+447930549717">+44 7930 549 717</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
