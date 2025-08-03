import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import backgroundHero from '../../assets/background-hero.jpg';
import itConsultLogo from '../../assets/itconsult-logo-green-scaled.png';

// Import React Icons
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaAngleDown,
  FaAngleRight,
  FaRegLightbulb,
  FaShieldAlt,
  FaServer,
  FaProjectDiagram,
} from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
const [dropdownHideTimeout, setDropdownHideTimeout] = useState(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle desktop services dropdown on hover or click
  // const toggleServicesDropdown = () => {
  //   setIsServicesDropdownOpen(!isServicesDropdownOpen);
  // };

  // Toggle mobile services dropdown on click
  const toggleMobileServicesDropdown = () => {
    setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
  };

// Show dropdown immediately
const handleMouseEnter = () => {
  if (dropdownHideTimeout) {
    clearTimeout(dropdownHideTimeout); // cancel pending hide
    setDropdownHideTimeout(null);
  }
  setIsServicesDropdownOpen(true);
};

// Delay hiding dropdown
const handleMouseLeave = () => {
  const timeout = setTimeout(() => {
    setIsServicesDropdownOpen(false);
  }, 200); // 200ms delay before hiding
  setDropdownHideTimeout(timeout);
};
  useEffect(() => {
    const handleScroll = () => {
      const mainNav = document.querySelector('.main-nav');
      const stickyThreshold = mainNav ? mainNav.offsetTop : 0;

      if (window.scrollY > stickyThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to close both mobile menu and dropdown
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Main Navigation Bar */}
      <div className={`main-nav ${isSticky ? 'sticky' : ''}`}>
        <div className="container main-nav-content">
          <div className="logo">
            <Link to="/">
              <img src={itConsultLogo} alt="IT Consult Logo" className="main-nav-logo" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li className='listed'><Link to="/">Home</Link></li>
            <li className='listed'><Link to="/about">About Us</Link></li>
            {/* Services Dropdown */}
            <li
  className="services-dropdown-container"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <Link to="/services" className="services-dropdown-toggle">
    Services <FaAngleDown />
  </Link>
  {isServicesDropdownOpen && (
    <div className="services-dropdown-menu">
                  {/* Service Item 1: IT Advisory */}
                  <Link to="/services/it-advisory" className="services-dropdown-item" onClick={handleMouseLeave}>
                    <FaRegLightbulb className="dropdown-icon" />
                    <div className="dropdown-text">
                      <h4 className="dropdown-title">IT Advisory & Consulting</h4>
                      <p className="dropdown-description">Strategic planning, digital transformation, and expert guidance.</p>
                    </div>
                  </Link>
                  {/* Service Item 2: GRC */}
                  <Link to="/services/grc" className="services-dropdown-item" onClick={handleMouseLeave}>
                    <FaShieldAlt className="dropdown-icon" />
                    <div className="dropdown-text">
                      <h4 className="dropdown-title">GRC (Governance, Risk & Compliance)</h4>
                      <p className="dropdown-description">Ensuring your systems are secure, resilient, and compliant.</p>
                    </div>
                  </Link>
                  {/* Service Item 3: Managed IT */}
                  <Link to="/services/managed-it" className="services-dropdown-item" onClick={handleMouseLeave}>
                    <FaServer className="dropdown-icon" />
                    <div className="dropdown-text">
                      <h4 className="dropdown-title">Managed IT Services</h4>
                      <p className="dropdown-description">24/7 monitoring, rapid support, and proactive maintenance.</p>
                    </div>
                  </Link>
                  {/* Service Item 4: Tech Sourcing */}
                  <Link to="/services/tech-sourcing" className="services-dropdown-item" onClick={handleMouseLeave}>
                    <FaProjectDiagram className="dropdown-icon" />
                    <div className="dropdown-text">
                      <h4 className="dropdown-title">Technology Sourcing & Projects</h4>
                      <p className="dropdown-description">End-to-end project management, from sourcing to implementation.</p>
                    </div>
                  </Link>
                </div>
              )}
            </li>
            <li className='listed'><Link to="/articles">Articles</Link></li>
            <li className='listed'><Link to="/contact">Contact</Link></li>
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
            <Link to="/" onClick={closeAllMenus}>
              <img src={itConsultLogo} alt="IT Consult Logo" className="mobile-menu-logo" />
            </Link>
          </div>
          <button className="close-btn" onClick={closeAllMenus} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li><Link to="/" onClick={closeAllMenus}>Home</Link></li>
          <li><Link to="/about" onClick={closeAllMenus}>About Us</Link></li>
          {/* Mobile Services Dropdown */}
          <li className="mobile-dropdown-container">
            <div className="mobile-dropdown-toggle" onClick={toggleMobileServicesDropdown}>
              Services {isMobileServicesDropdownOpen ? <FaAngleDown /> : <FaAngleRight />}
            </div>
            {isMobileServicesDropdownOpen && (
              <ul className="mobile-services-dropdown-menu">
                <li><Link to="/services/it-advisory" onClick={closeAllMenus}>IT Advisory</Link></li>
                <li><Link to="/services/grc" onClick={closeAllMenus}>GRC</Link></li>
                <li><Link to="/services/managed-it" onClick={closeAllMenus}>Managed IT</Link></li>
                <li><Link to="/services/tech-sourcing" onClick={closeAllMenus}>Tech Sourcing</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/articles" onClick={closeAllMenus}>Articles</Link></li>
          <li><Link to="/contact" onClick={closeAllMenus}>Contact</Link></li>
        </ul>
        <div className="mobile-contact-details">
          <h3>Contact Us</h3>
          <p>Give us a call or drop by anytime, we endeavor to answer all inquiries within 24 hours.</p>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span> Indigo Cowork Space, General Mathenge</span>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <span>info@itconsult.africa</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt />
            <span>+254 737 532 023</span>
          </div>
          <div className="contact-item">
            <FaLinkedin />
            <span><a href="https://www.linkedin.com/company/itconsultafrica" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">Linkedin</a></span>
          </div>
 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;