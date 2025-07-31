import React from 'react';
import './PartnersSection.css';
import partner1 from '../../../assets/partners/Partner1.png';
import partner2 from '../../../assets/partners/Partner2.png';
import partner3 from '../../../assets/partners/Partner3.png';
import partner4 from '../../../assets/partners/Partner4.png';
import partner5 from '../../../assets/partners/Partner5.png';
import partner6 from '../../../assets/partners/Partner6.png';
import partner7 from '../../../assets/partners/Partner7.png';
import partner8 from '../../../assets/partners/Partner8.png';
import partner9 from '../../../assets/partners/Partner9.png'; // Bitdefender
import partner10 from '../../../assets/partners/Partner10.png'; // Sophos
import partner11 from '../../../assets/partners/Partner11.png'; // Kristel Communication
import partner12 from '../../../assets/partners/Partner12.png'; // Dell Technologies
import partner13 from '../../../assets/partners/Partner13.png'; // DOSIKI LTD
import partner14 from '../../../assets/partners/Partner14.png'; // Lenovo 360 Infrastructure
import partner15 from '../../../assets/partners/Partner15.png'; // Lenovo 360 Intelligent
import partner16 from '../../../assets/partners/Partner16.png'; // Microsoft Solutions Partner (Modern Work)
import partner17 from '../../../assets/partners/Partner17.png'; // Microsoft Partner
import partner18 from '../../../assets/partners/Partner18.png'; // Placeholder for additional partners

const partnerLogos = [
    { src: partner1, alt: 'Mada Hotels', description: 'A premier hotel chain and client.' },
    { src: partner2, alt: 'Oakwood Hotel', description: 'Long-term client for IT infrastructure.' },
    { src: partner3, alt: 'Great Lakes Africa', description: 'A trusted partner in the region.' },
    { src: partner4, alt: 'Deutsche Schule Nairobi', description: 'Providing technology solutions for education.' },
    { src: partner5, alt: 'Clique', description: 'A valued client for managed IT services.' },
    { src: partner6, alt: 'V Advocates', description: 'Offering legal sector-specific IT consulting.' },
    { src: partner7, alt: 'Saki Africa', description: 'A key technology and solutions partner.' },
    { src: partner8, alt: 'Fun Hub', description: 'Client for digital experience and IT support.' },
    { src: partner9, alt: 'Bitdefender Reseller', description: 'A certified Bitdefender security reseller.' },
    { src: partner10, alt: 'Sophos Authorized Partner', description: 'Providing advanced cybersecurity solutions as a Sophos partner.' },
    { src: partner11, alt: 'Kristel Communication', description: 'A partner in communication technology.' },
    { src: partner12, alt: 'Dell Technologies Authorized Partner', description: 'Authorized to provide Dell hardware and solutions.' },
    { src: partner13, alt: 'DOSIKI LTD Enterprises', description: 'A valued client and technology partner.' },
    { src: partner14, alt: 'Lenovo 360 Infrastructure Solutions', description: '2025 Authorized partner for infrastructure.' },
    { src: partner15, alt: 'Lenovo 360 Intelligent Devices', description: '2025 Authorized partner for intelligent devices.' },
    { src: partner16, alt: 'Microsoft Solutions Partner', description: 'Specializing in Modern Work solutions.' },
    { src: partner17, alt: 'Microsoft Partner', description: 'A certified Microsoft solutions provider.' },
    { src: partner18, alt: 'Placeholder Partner', description: 'Placeholder for a future partnership.' },
];

const PartnersSection = () => {
    return (
        <section className="partners-section">
            <div className="services-container partners-content">
                <h2 className="section-title">Our Partners and Clients</h2>
                <p className="section-intro">We are trusted by leading organizations to deliver exceptional IT solutions and services. Our partnerships are a testament to our commitment to quality and results.</p>
                
                <div className="partners-grid">
                    {partnerLogos.map((logo, index) => (
                        <div className="partner-logo-item" key={index}>
                            <img src={logo.src} alt={logo.alt} className="partner-logo-img" />
                            <div className="partner-info-overlay">
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