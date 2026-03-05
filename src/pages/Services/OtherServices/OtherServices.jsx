// src/components/OtherServices.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './OtherServices.css';

// Import images based on your service assets
import managedItImage from "../../../assets/managed-it4.jpg";
import modernizationImage from "../../../assets/service-dark.jpg";
import cybersecurityImage from "../../../assets/managed-it3.jpg";

const otherServices = [
  {
    title: 'Managed IT Services',
    description: 'A proactive approach to managing your technology, ensuring uptime and efficiency.',
    link: '/services/managed-it',
    image: managedItImage,
  },
  {
    title: 'IT Modernization',
    description: 'Transforming legacy infrastructure into agile, cloud-ready, and high-performance environments.',
    link: '/services/it-modernization',
    image: modernizationImage,
  },
  {
    title: 'Cybersecurity & Defence',
    description: 'Multi-layered protection strategies to safeguard your data against evolving digital threats.',
    link: '/services/cybersecurity',
    image: cybersecurityImage,
  }
];

const OtherServices = ({ currentServiceLink }) => {
  // Filter out the current service so the user sees the other two core pillars
  const servicesToShow = otherServices.filter(service => service.link !== currentServiceLink);

  return (
    <section className="other-services-section">
      <div className="container">
        <div className="other-services-header">
          <p className="other-services-subtitle">CORE PILLARS</p>
          <h2 className="other-services-title">Explore Our Expertise</h2>
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
                <div className="other-services-card-footer">
                   <span className="other-services-card-link">
                    Learn More <FaArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="other-services-cta-container">
          <Link to="/services" className="other-services-cta-btn">
            View All Service Details
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default OtherServices;