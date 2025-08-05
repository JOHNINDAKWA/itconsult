// src/components/OtherServices.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './OtherServices.css';

// Import your background images for each service card
import itAdvisoryImage from "../../../assets/managed-it3.jpg";
import grcImage from "../../../assets/grc-hero.jpg";
import managedItImage from "../../../assets/managed-it4.jpg";
import techSourcingImage from "../../../assets/service-dark.jpg";

const otherServices = [
  {
    title: 'IT Advisory & Consulting',
    description: 'Guiding your business with strategic technology planning and expert advice for sustained growth.',
    link: '/services/it-advisory',
    image: itAdvisoryImage,
  },
  {
    title: 'Governance, Risk & Compliance',
    description: 'Ensuring your systems are secure, compliant, and resilient against modern threats.',
    link: '/services/grc',
    image: grcImage,
  },
  {
    title: 'Managed IT Services',
    description: 'We handle your day-to-day IT operations, allowing you to focus on your core business.',
    link: '/services/managed-it',
    image: managedItImage,
  },
  {
    title: 'Technology Sourcing & Projects',
    description: 'End-to-end management for acquiring and implementing the right technology solutions.',
    link: '/services/tech-sourcing',
    image: techSourcingImage,
  },
];

const OtherServices = ({ currentServiceLink }) => {
  // Filter out the current service to avoid linking to the same page
  const servicesToShow = otherServices.filter(service => service.link !== currentServiceLink);

  return (
    <section className="other-services-section">
      <div className="container">
        <div className="other-services-header">
          <p className="other-services-subtitle">MORE OF WHAT WE DO</p>
          <h2 className="other-services-title">Explore Our Other Services</h2>
        </div>

        <div className="other-services-grid">
          {servicesToShow.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="other-services-card"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="other-services-card-overlay"></div>
              <div className="other-services-card-content">
                <h3 className="other-services-card-title">{service.title}</h3>
                <p className="other-services-card-description">{service.description}</p>
                <span className="other-services-card-link">
                  Learn More <FaArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* NEW: Button to the main services page */}
        <div className="other-services-cta-container">
          <Link to="/services" className="other-services-cta-btn">
            View All Services
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default OtherServices;