// File: src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hope+Farm+Cottage+Main+Street+Hungarton+Leicestershire+LE7+9JR"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FiMapPin />
              Hope Farm Cottage,<br />
              Main Street, <br />
              Hungarton,<br />
              Leicestershire,<br />
              LE7 9JR
            </a>

          </p>

          <p>
            <a
              href="https://wa.me/447930549717"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FiPhone /> +44 7930 549 717
            </a>
          </p>

          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bernieboo200@gmail.com&su=Grooming%20Inquiry&body=Hi,%20I%20would%20like%20to%20book%20a%20dog%20grooming%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FiMail /> bernieboo200@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Courses and Training</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            {/* <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li> */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <p>Follow us on social media to see our latest work and updates.</p>
          <div className="social-icons">
            <a
              href="https://m.facebook.com/100093093552115/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="ico" />
            </a>
            <a
              href="https://www.instagram.com/leicesterdoggrooming/?igsh=ejVmOXZjc212NTZy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="ico" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Leicester Dog Grooming Courses. Partnered with{" "}
          <strong>Ansely</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
