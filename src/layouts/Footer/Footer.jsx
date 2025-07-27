import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css'; // Import specific styles
import footerBg from '../../assets/footer-bg.jpeg'; // Import footer background image
import itConsultLogo from '../../assets/itconsult-logo-green-scaled.png'; // Re-use the logo

// Import React Icons for social media (if needed, otherwise text links)
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-overlay"></div> {/* Overlay for background image */}
      <div className="container footer-content-grid">
        {/* Column 1: Logo and Description */}
        <div className="footer-col footer-about">
          <div className="footer-logo">
            {/* Link logo to home page */}
            <Link to="/">
              <img src={itConsultLogo} alt="IT Consult Logo" className="footer-logo-img" />
            </Link>
          </div>
          <p className="footer-description">
            We are a Nairobi-based IT consultancy firm dedicated to helping businesses revolutionize their operations through modern, strategic, and results-driven technology solutions.
          </p>
        </div>

        {/* Column 2: Company Links */}
        <div className="footer-col footer-links">
          <h4 className="footer-col-title">Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="#">Legal Notice</Link></li> {/* Placeholder, adjust path if a Legal Notice page is created */}
          </ul>
        </div>

        {/* Column 3: Services Links (from client write-up) */}
        <div className="footer-col footer-links">
          <h4 className="footer-col-title">Services</h4>
          <ul>
            <li><Link to="/services">IT Advisory & Consulting</Link></li>
            <li><Link to="/services">Governance, Risk & Compliance</Link></li>
            <li><Link to="/services">Managed IT Services</Link></li>
            <li><Link to="/services">Technology Sourcing</Link></li>
          </ul>
        </div>

        {/* Column 4: Resources Links (currently commented out in your provided code) */}
        {/* If you uncomment this, remember to update these <a> tags to <Link> components */}
        {/* <div className="footer-col footer-links">
          <h4 className="footer-col-title">Resources</h4>
          <ul>
            <li><Link to="/articles">Articles & Insights</Link></li>
            <li><Link to="#">Client Intake Forms</Link></li>
            <li><Link to="#">Confidentiality Policy</Link></li>
            <li><Link to="#">Security Best Practices</Link></li>
          </ul>
        </div> */}

        {/* Column 5: Follow Us */}
        <div className="footer-col footer-follow">
          <h4 className="footer-col-title">Follow Us</h4>
          <div className="footer-social-links">
            {/* External links remain <a> tags */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          </div>
          <p className="footer-newsletter-text">Stay updated with our latest insights.</p>
          {/* Link button to contact page */}
          <Link to="/contact" className="btn btn-outline footer-newsletter-btn">Contact Us</Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} IT Consult. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
