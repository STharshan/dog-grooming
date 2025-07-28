import React from "react";
import "./Service.css";
import img1 from "../../../assets/first.png";
import img2 from "../../../assets/second.png";
import img3 from "../../../assets/third.png";
import { RiScissorsFill } from "react-icons/ri";
import { LuAward, LuBookOpen } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const services = [
  {
    image: img1,
    icon: <RiScissorsFill />,
    title: "Puppy Intro Groom",
    title2: "Perfect for First-Timers",
    description:
      "Gentle handling, a soothing bath, light drying, and basic coat care — ideal for puppies or dogs new to grooming.",
  },
  {
    image: img2,
    icon: <LuAward />,
    title: "Breed-Specific Styling ",
    title2: "Advanced Grooming Techniques",
    description:
      "Tailored cuts and styling for specific breeds, including creative trims and expert care for challenging coat types.",
  },
  {
    image: img3,
    icon: <LuBookOpen />,
    title: "Full Grooming Package ",
    title2: "Complete Professional Care",
    description:
      "A full-service experience including wash, dry, coat styling, nail trimming, ear cleaning, and a fresh finishing touch - perfect for dogs who deserve the best.",
  },
];

const Services = () => {

  const navigate = useNavigate();
  const handleService = () => navigate('/services');

  return (
    <section className="services-section">
      <div className="services-header">
        <h4 className="service-our">Our Expertise</h4>
        <h1>Professional Dog Grooming Services</h1>
        <p>
          Give your pup the care they deserve with our expert grooming - tailored for all breeds, sizes, and coat types.
        </p>
      </div>

      <div className="services-cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="card-content">
              <div className="icon1">{service.icon}</div>
              <h3>{service.title}</h3>
              <h3>{service.title2}</h3>
              <p>{service.description}</p>
              <Link to="/services" className="learn-more-link">
                Learn More <span className="arrow-icon"><FaArrowRight /></span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="services-btn">
        <button onClick={handleService}>View All Services</button>
      </div>
    </section>
  );
};

export default Services;
