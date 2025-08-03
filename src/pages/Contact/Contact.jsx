import React from "react";
import "./Contact.css"; // Import specific styles

// Import images
import contactHeroBg from "../../assets/contact-hero-bg.jpg";
import contactMap from "../../assets/contact-map.jpg";
import contactDetailsBg from "../../assets/contact-details-bg.jpg"; // New image for contact details card background

// Import React Icons
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      {/* Top Section: Image, Map, Contact Details Card */}
      <section className="contact-hero-section">
        <div className="contact-hero-grid">
          {/* Left: Background Image (Buildings) */}
          <div className="contact-hero-image-container">
            <img
              src={contactHeroBg}
              alt="IT Consult Office Buildings"
              className="contact-hero-image"
            />
            <div className="contact-hero-image-overlay"></div>
          </div>

          {/* Middle: Map Placeholder */}
          <div className="contact-map-container">
            <img
              src={contactMap}
              alt="Location Map"
              className="contact-map-image"
            />
            {/* You could add a "View larger map" link here if desired */}
            {/* <a href="#" className="view-map-link">View larger map...</a> */}
          </div>

          {/* Right: Contact Details Card - Now with background image */}
          <div className="contact-details-card">
            <div className="card-background-image-container">
              <img
                src={contactDetailsBg}
                alt="Contact Details Background"
                className="card-bg-image"
              />
              <div className="card-bg-overlay"></div>
            </div>
            <div className="card-content">
              {" "}
              {/* Wrap existing content for z-index */}
              <h3 className="card-title">Contact Details</h3>
              <div className="contact-info-item">
                <FaMapMarkerAlt />
                <span> Indigo Cowork Space, General Mathenge</span>
              </div>
              <div className="contact-info-item">
                <FaPhoneAlt />
                <span>+254 737 532 023</span>
              </div>
              <div className="contact-info-item">
                <FaEnvelope />
                <span>info@itconsult.africa</span>
              </div>
              <div className="contact-info-item">
                <FaLinkedin />
                <span>
                  {" "}
                  <a
                    href="https://www.linkedin.com/company/itconsultafrica"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section: Short Intro and Contact Info Blocks */}
      <section className="contact-info-section">
        <div className="container text-center">
          <p className="contact-intro-text">
            Please let us know if you have a question, want to leave a comment,
            or would like further information about IT Consult.
          </p>
          <div className="contact-blocks-grid">
            <div className="contact-block">
              <FaPhoneAlt className="contact-block-icon" />
              <p className="contact-block-label">Call us</p>
              <p className="contact-block-value">+254 737 532 023</p>
            </div>
            <div className="contact-block">
              <FaWhatsapp className="contact-block-icon" />
              <p className="contact-block-label">Whatsapp</p>
              <p className="contact-block-value">+254 737 532 023</p>{" "}
              {/* Placeholder Fax */}
            </div>
            <div className="contact-block">
              <FaEnvelope className="contact-block-icon" />
              <p className="contact-block-label">Have any questions?</p>
              <p className="contact-block-value">info@itconsult.africa</p>
            </div>
            <div className="contact-block">
              <FaMapMarkerAlt className="contact-block-icon" />
              <p className="contact-block-label">Our Location</p>
              <p className="contact-block-value">
                {" "}
                Indigo Cowork Space, General Mathenge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="feedback-form-section">
        <div className="container">
          <h2 className="form-section-title">Feedback Form</h2>
          <form
            action="https://formspree.io/f/xanbdldy"
            method="POST"
            className="feedback-form"
          >
            <div className="form-group full-width">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message here..."
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Your first name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject of your inquiry"
                required
              />
            </div>
            <button type="submit" className="btn btn-custom-gold submit-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
