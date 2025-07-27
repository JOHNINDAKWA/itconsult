import React from "react";
import "./ContactCtaSection.css"; // Import specific styles

// Import placeholder images
import ctaMainImage from "../../../assets/cta-main.jpg";
import ctaBriefingBg from "../../../assets/cta-sec-bg.jpg"; // New image for briefing card background
import ctaCardImageLarge from "../../../assets/cta-card-img.jpg"; // New larger image for sensitive card
import { Link } from "react-router-dom";

const ContactCtaSection = () => {
  return (
    <section className="contact-cta-section">
      <div className="contact-cta-grid">
        {/* Left Side: Large Image */}
        <div className="cta-main-image-container">
          <img
            src={ctaMainImage}
            alt="Business Meeting"
            className="cta-main-image"
          />
          <div className="cta-image-overlay"></div>{" "}
          {/* Optional overlay for image */}
        </div>

        {/* Right Side: Two Cards */}
        <div className="cta-cards-container">
          {/* Card 1: Confidential Briefing - Now with background image */}
          <div className="cta-card cta-card-briefing">
            <div className="card-background-image-container">
              <img
                src={ctaBriefingBg}
                alt="Confidential Briefing Background"
                className="card-bg-image"
              />
              <div className="card-bg-overlay"></div>{" "}
              {/* Overlay for background image */}
            </div>
            <div className="card-content content-left">
              <h3 className="card-title">
                Ready to Strategize Your Digital Future?
              </h3>
              <p className="card-description">
                Discover how smart IT strategies can move your business ahead.
              </p>
              {/* Using Link for routing */}
              <Link to="/contact" className="btn btn-custom-gold">
                Schedule a Discovery Call
              </Link>
            </div>
          </div>

          {/* Card 2: Sensitive Matter - Now with larger, rounded square image */}
          <div className="cta-card cta-card-sensitive">
            <div className="card-content">
              <h3 className="card-title">Facing a Critical IT Challenge?</h3>
              <p className="card-description">
                Get fast, discreet support.
              </p>
              {/* Using Link for routing */}
              <Link to="/contact" className="btn btn-outline">
                Get Urgent Support
              </Link>
            </div>
            <div className="card-image-wrapper">
              <img
                src={ctaCardImageLarge}
                alt="Consultant"
                className="card-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;
