import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import backgroundHero from '../../assets/background-hero.jpg';
import itConsultLogo from '../../assets/itconsult-logo-green-scaled.png';

// Import React Icons
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // New state for sticky effect

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Optional: Log image paths to console for debugging
    console.log('Background image path:', backgroundHero);
    console.log('IT Consult Logo path:', itConsultLogo);

    // Function to handle scroll event
    const handleScroll = () => {
      // Get the height of the top bar + main nav to determine when to make it sticky
      // You can adjust this value based on when you want the sticky effect to kick in
      const mainNav = document.querySelector('.main-nav');
      const stickyThreshold = mainNav ? mainNav.offsetTop : 0; // Get the top position of the main nav

      if (window.scrollY > stickyThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <nav className="navbar">
      {/* Top Bar */}
      <div className="top-bar" style={{ backgroundImage: `url(${backgroundHero})` }}>
        <div className="top-bar-overlay"></div>
        <div className="container top-bar-content">
          <div className="top-bar-contact">
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>5010 Avenue of the Moon, Nairobi, Kenya</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>info@itconsult.com</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt />
              <span>+254 702 207 999</span>
              <span className="free-call">Free call</span>
            </div>
          </div>
          <div className="top-bar-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Apply 'sticky' class conditionally */}
      <div className={`main-nav ${isSticky ? 'sticky' : ''}`}>
        <div className="container main-nav-content">
          <div className="logo">
            <Link to="/">
              <img src={itConsultLogo} alt="IT Consult Logo" className="main-nav-logo" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="hamburger" onClick={toggleMobileMenu}>
            <FaBars className="hamburger-icon" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo">
            <Link to="/" onClick={toggleMobileMenu}>
              <img src={itConsultLogo} alt="IT Consult Logo" className="mobile-menu-logo" />
            </Link>
          </div>
          <button className="close-btn" onClick={toggleMobileMenu} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMobileMenu}>About Us</Link></li>
          <li><Link to="/services" onClick={toggleMobileMenu}>Services</Link></li>
          <li><Link to="/articles" onClick={toggleMobileMenu}>Articles</Link></li>
          <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
        </ul>
        <div className="mobile-contact-details">
          <h3>Contact Us</h3>
          <p>Give us a call or drop by anytime, we endeavor to answer all inquiries within 24 hours.</p>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>5010 Avenue of the Moon, Nairobi, Kenya</span>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <span>info@itconsult.com</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt />
            <span>+254 702 207 999</span>
          </div>
          <div className="mobile-social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;