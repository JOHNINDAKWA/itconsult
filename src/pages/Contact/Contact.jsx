import React, { useState } from "react";
import "./Contact.css"; // Import specific styles

// Import images
import contactHeroBg from "../../assets/contact-hero-bg.jpg";
import contactMap from "../../assets/contact-map.jpg";
import contactDetailsBg from "../../assets/contact-details-bg.jpg";

// Import React Icons
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  // State to manage form submission status
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // The Formspree endpoint
  const formSpreeUrl = "https://formspree.io/f/xanbdldy";

  // New async function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form redirection

    setIsSubmitting(true);
    setError(null);

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(formSpreeUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo(0, 0); // Scroll to the top of the page on success
      } else {
        const result = await response.json();
        if (result.errors) {
          setError(
            result.errors.map((e) => e.message).join(", ") ||
              "An unknown error occurred."
          );
        } else {
          setError("Failed to submit the form. Please try again.");
        }
        setIsSubmitting(false);
      }
    } catch (err) {
      setError(err, "Network error. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  // Conditional rendering based on the submission state
  if (submitted) {
    return (
      <div className="contact-page-wrapper success-page-wrapper">
        <section className="contact-hero-section">
          <div className="container text-center py-20">
            <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl mb-8">
              Your request has been submitted successfully. We will get back to
              you as soon as possible.
            </p>
            <div className="flex flex-col items-center gap-4 text-lg">
              <p>
                You can return to the {" "}
                <a href="/" className="text-teal-400 hover:underline ml-1">
                  Home page
                </a>
                .
              </p>
              <p>
                Explore our {""}
                <a
                  href="/services"
                  className="text-teal-400 hover:underline ml-1"
                >
                  Services
                </a>
                .
              </p>
              <p>
                Read our latest {" "}
                <a
                  href="/articles"
                  className="text-teal-400 hover:underline ml-1"
                >
                  Articles
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Render the original contact form if not submitted
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
                <FaLinkedin className="linkedin-hover"/>
                <span>
                  {" "}
                  <a
                    href="https://www.linkedin.com/company/itconsultafrica"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="linkedin-hover"
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
          <form onSubmit={handleSubmit} className="feedback-form">
            {/* Display error message if there is one */}
            {error && <p className="text-red-500 mb-4">{error}</p>}
           
            <div className="form-group">
              <label htmlFor="firstName">Full Name *</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Your full name"
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
            <button
              type="submit"
              className="btn btn-custom-gold submit-btn"
              disabled={isSubmitting} // Disable the button while submitting
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
