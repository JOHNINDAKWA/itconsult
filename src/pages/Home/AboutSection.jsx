import React from 'react';
import Marquee from 'react-fast-marquee';
import './AboutSection.css';

// Import images
import itconsultImage from '../../assets/itconsult.jpg'; // For synergist-image
import missionBg from '../../assets/mission-bg.jpg'; // For Mission card background
import visionBg from '../../assets/strategy-bg.jpg'; // For Vision card background
import strategyBg from '../../assets/vision-bg.jpg'; // For Strategy card background

// Import React Icons
import {
  FaCloud, FaShieldAlt, FaChartLine, FaCloudUploadAlt, FaCog,
  FaRedoAlt, FaChartBar, FaLightbulb, FaClipboardCheck, FaHandshake, FaRocket
} from 'react-icons/fa';

const AboutSection = () => {
  // Marquee content with associated icons
  const marqueeContent = [
    { text: "Digital Transformation", icon: <FaCloud /> },
    { text: "Cybersecurity Solutions", icon: <FaShieldAlt /> },
    { text: "Strategic IT Advisory", icon: <FaChartLine /> },
    { text: "Cloud Migration", icon: <FaCloudUploadAlt /> },
    { text: "Managed Services", skill: "Managed Services", icon: <FaCog /> },
    { text: "Business Continuity", icon: <FaRedoAlt /> },
    { text: "Data Analytics", icon: <FaChartBar /> },
    { text: "Innovation & Growth", icon: <FaLightbulb /> },
    { text: "Compliance & Risk Management", icon: <FaClipboardCheck /> }
  ];

  return (
    <section className="about-section">
      {/* This container will hold the header and synergists section, maintaining their width */}
      <div className="container">
        {/* Main Heading for About Section */}
        <div className="about-header text-center">
          <p className="section-subtitle">Our Approach</p>
          <h2 className="section-title">
            Consulting isn’t just about advice, it’s more, it’s delivering solutions.
          </h2>
          <p className="section-description">
            We get hands-on. Our team deeply understands your business, identifies technological challenges,
            and implements tailored solutions that drive performance and efficiency.
          </p>
        </div>

        {/* Technical Synergists Section */}
        <div className="technical-synergists">
          <div className="synergist-content">
            <h3 className="synergist-title">That makes us Technical Synergists</h3>
            <p className="synergist-description">
              By blending business strategy with digital transformation, we help you stay agile and secure
              while adopting the latest technologies.
            </p>
            <ul className="synergist-list">
              <li><span className="list-icon">&#10003;</span> Analyse your processes to find opportunities</li>
              <li><span className="list-icon">&#10003;</span> Align solutions with your business goals</li>
              <li><span className="list-icon">&#10003;</span> Implement strategies that fuel innovation</li>
            </ul>
          </div>
          {/* Replaced placeholder with actual image */}
          <div className="synergist-image">
            <img src={itconsultImage} alt="IT Consult Team" className="synergist-actual-img" />
          </div>
        </div>
      </div> {/* End of .container for the upper sections */}

      {/* Mission, Vision, Strategy Section - Redesigned and now outside the main container */}
      {/* This allows it to stretch to a wider width */}
      <div className="mvs-grid-wrapper"> {/* New wrapper for wider MVS grid */}
        <div className="mvs-grid">
          {/* Mission Card */}
          <div className="mvs-item">
            <div className="mvs-image-container">
              <img src={missionBg} alt="Our Mission Background" className="mvs-bg-image" />
              <div className="mvs-gradient-overlay"></div>
            </div>
            <div className="mvs-text-content mission-content">
              <h3 className="mvs-title">Our Mission</h3>
              <p className="mvs-description">
                To empower businesses through a consultative and collaborative approach,
                connecting them with trusted partners, and driving growth, efficiency, and security.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="mvs-item">
            <div className="mvs-image-container">
              <img src={visionBg} alt="Our Vision Background" className="mvs-bg-image" />
              <div className="mvs-gradient-overlay"></div>
            </div>
            <div className="mvs-text-content">
              <h3 className="mvs-title">Our Vision</h3>
              <p className="mvs-description">
                To be one of Africa’s leading IT consultancy firms, recognized for our expertise, strategic partnerships,
                and commitment to business transformation.
              </p>
            </div>
          </div>

          {/* Strategy Card */}
          <div className="mvs-item">
            <div className="mvs-image-container">
              <img src={strategyBg} alt="Our Strategy Background" className="mvs-bg-image" />
              <div className="mvs-gradient-overlay"></div>
            </div>
            <div className="mvs-text-content strategy-content">
              <h3 className="mvs-title">Our Strategy</h3>
              <h3>Your Success, Our Priority</h3>
              <p className="mvs-description">
                Whether you need expert IT advice, a digital transformation roadmap,
                we ensure your business has the tools and technologies to thrive.
              </p>
            </div>
          </div>
        </div>
      </div> {/* End of .mvs-grid-wrapper */}


      {/* Marquee Section */}
      <div className="marquee-section">
        <div className="container text-center">
          <p className="marquee-intro">Partnering for Your Digital Future:</p>
        </div>
        <Marquee gradient={true} gradientColor={[45, 55, 72]} speed={40} pauseOnHover={true}>
          {marqueeContent.map((item, index) => (
            <span key={index} className="marquee-item">
              {item.icon} {item.text} 
            </span>
          ))}
        </Marquee>

      </div>
    </section>
  );
};

export default AboutSection;
