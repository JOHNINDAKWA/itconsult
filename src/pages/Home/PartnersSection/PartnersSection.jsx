import React, { useEffect } from 'react';
import './PartnersSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- Partner & Client Logos ---
import partner1 from '../../../assets/Clients/Partner1.png';
import partner2 from '../../../assets/Clients/Partner2.png';
import partner3 from '../../../assets/Clients/Partner3.png';
import partner4 from '../../../assets/Clients/Partner4.png';
import partner5 from '../../../assets/Clients/Partner5.png';
import partner6 from '../../../assets/Clients/Partner6.png';
import partner7 from '../../../assets/Clients/Partner7.png';
import partner8 from '../../../assets/Clients/Partner8.png';
import partner9 from '../../../assets/Clients/Partner9.png'; // Bitdefender
import partner10 from '../../../assets/Clients/Partner10.png'; // Sophos
import partner11 from '../../../assets/Clients/Partner11.png'; // Kristel Communication
import partner12 from '../../../assets/Clients/Partner12.png'; // Dell Technologies
import partner13 from '../../../assets/Clients/Partner13.png'; // DOSIKI LTD
import partner14 from '../../../assets/Clients/Partner14.png'; // Lenovo 360 Infrastructure
import partner15 from '../../../assets/Clients/Partner15.png'; // Lenovo 360 Intelligent
import partner16 from '../../../assets/Clients/Partner16.png'; // Microsoft Solutions Partner (Modern Work)
import partner17 from '../../../assets/Clients/Partner17.png'; // Microsoft Partner
import partner18 from '../../../assets/Clients/Partner18.png'; // Placeholder

// --- Grouped Arrays ---
const partnerLogos = [
  { src: partner9, alt: 'Bitdefender Reseller', description: 'A certified Bitdefender security reseller.' },
  { src: partner10, alt: 'Sophos Authorized Partner', description: 'Advanced cybersecurity provider.' },
  { src: partner11, alt: 'Kristel Communication', description: 'A partner in communication tech.' },
  { src: partner12, alt: 'Dell Technologies', description: 'Authorized Dell partner.' },
  { src: partner14, alt: 'Lenovo 360 Infrastructure', description: 'Authorized infra partner.' },
  { src: partner15, alt: 'Lenovo 360 Intelligent Devices', description: 'Smart device solutions.' },
  { src: partner16, alt: 'Microsoft Solutions Partner', description: 'Modern Work specialization.' },
  { src: partner17, alt: 'Microsoft Partner', description: 'Certified Microsoft provider.' },
  { src: partner18, alt: 'Microsoft Partner', description: 'Microsoft Partner.' },
];

const clientLogos = [
  { src: partner1, alt: 'Mada Hotels', description: 'Premier hotel chain and client.' },
  { src: partner2, alt: 'Oakwood Hotel', description: 'Client for IT infrastructure.' },
  { src: partner3, alt: 'Great Lakes Africa', description: 'Trusted regional partner.' },
  { src: partner4, alt: 'Deutsche Schule Nairobi', description: 'IT for education sector.' },
  { src: partner5, alt: 'Clique', description: 'Client for managed IT services.' },
  { src: partner6, alt: 'V Advocates', description: 'IT consulting for legal sector.' },
  { src: partner7, alt: 'Saki Africa', description: 'Key technology solutions client.' },
  { src: partner8, alt: 'Fun Hub', description: 'Digital experience and IT support.' },
  { src: partner13, alt: 'DOSIKI LTD Enterprises', description: 'Client and tech partner.' },
];

const PartnersSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="partners-section">
      <div className="services-container partners-content">
        <h2 className="section-title">Partnerships, Collaborations and Clients</h2>
        <p className="section-intro">
          We are trusted by leading organizations to deliver exceptional IT solutions and services. Our partnerships are a testament to our commitment to quality and results.
        </p>

        <h3 className="subsection-title">Technology & Strategic Partners</h3>
        <div className="partners-grid">
          {partnerLogos.map((logo, index) => (
            <div className="partner-logo-item" key={index} data-aos="fade-right">
              <img src={logo.src} alt={logo.alt} className="partner-logo-img" />
              <div className="partner-info-overlay overlay-one">
                <h4>{logo.alt}</h4>
                <p>{logo.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Our Clients</h3>
        <div className="partners-grid">
          {clientLogos.map((logo, index) => (
            <div className="partner-logo-item" key={index} data-aos="fade-left">
              <img src={logo.src} alt={logo.alt} className="partner-logo-img" />
              <div className="partner-info-overlay overlay-two">
                <h4>{logo.alt}</h4>
                <p>{logo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
