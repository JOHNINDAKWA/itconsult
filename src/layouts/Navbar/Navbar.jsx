import React, { useState, useEffect } from "react";
// Import HashLink instead of the standard Link for anchor support
import { HashLink as Link } from "react-router-hash-link"; 
import "./Navbar.css";
import itConsultLogo from "../../assets/itconsult-logo-green-scaled.png";

import {
  FaBars,
  FaTimes,
  FaAngleDown,
  FaAngleRight,
  FaShieldAlt,
  FaServer,
  FaCogs,
  FaThLarge,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] =
    useState(false);
  const [dropdownHideTimeout, setDropdownHideTimeout] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileServicesDropdown = () =>
    setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);

  const handleMouseEnter = () => {
    if (dropdownHideTimeout) clearTimeout(dropdownHideTimeout);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsServicesDropdownOpen(false), 200);
    setDropdownHideTimeout(timeout);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className={`main-nav ${isSticky ? "sticky" : ""}`}>
        <div className="container main-nav-content">
          <div className="logo">
            <Link to="/" onClick={closeAllMenus}>
              <img
                src={itConsultLogo}
                alt="IT Consult Logo"
                className="main-nav-logo"
              />
            </Link>
          </div>

          <ul className="nav-links">
            <li className="listed">
              <Link to="/">Home</Link>
            </li>
            <li className="listed">
              <Link to="/about">About Us</Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="services-dropdown-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Main Toggle Link */}
              <Link smooth to="/services#top" className="services-dropdown-toggle">
                Services <FaAngleDown />
              </Link>

              {isServicesDropdownOpen && (
                <div className="services-dropdown-menu">
                  {/* 0. The Catch-All - UPDATED TO HASHLINK */}
                  <Link
                    smooth
                    to="/services#pillars"
                    className="services-dropdown-item all-services-item"
                    onClick={closeAllMenus}
                  >
                    <FaThLarge className="dropdown-icon" />
                    <div className="dropdown-text">
                      <h4 className="dropdown-title">All Services</h4>
                      <p className="dropdown-description">
                        Strategic oversight and our complete technology
                        portfolio.
                      </p>
                    </div>
                  </Link>

                  <div className="dropdown-divider"></div>

                  {/* 1. IT Modernization */}
                  <Link
                    to="/services/it-modernization"
                    className="services-dropdown-item"
                    onClick={closeAllMenus}
                  >
                    <FaCogs className="dropdown-icon" />
                    <div className="dropdown-text">
                      <h4 className="dropdown-title">IT Modernization</h4>
                      <p className="dropdown-description">
                        Infrastructure upgrades and eliminating legacy debt.
                      </p>
                    </div>
                  </Link>

                  {/* 2. Cybersecurity */}
                  <Link
                    to="/services/cybersecurity"
                    className="services-dropdown-item"
                    onClick={closeAllMenus}
                  >
                    <FaShieldAlt className="dropdown-icon" />
                    <div className="dropdown-text">
                      <h4 className="dropdown-title">Cybersecurity & Risk</h4>
                      <p className="dropdown-description">
                        Proactive resilience and identity management.
                      </p>
                    </div>
                  </Link>

                  {/* 3. Managed Services */}
                  <Link
                    to="/services/managed-it"
                    className="services-dropdown-item"
                    onClick={closeAllMenus}
                  >
                    <FaServer className="dropdown-icon" />
                    <div className="dropdown-text">
                      <h4 className="dropdown-title">Managed IT Services</h4>
                      <p className="dropdown-description">
                        24/7 monitoring and rapid-response helpdesk.
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </li>

            <li className="listed">
              <Link to="/articles">Articles</Link>
            </li>
            <li className="listed">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="hamburger" onClick={toggleMobileMenu}>
            <FaBars className="hamburger-icon" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <Link to="/" onClick={closeAllMenus}>
            <img src={itConsultLogo} alt="Logo" className="mobile-menu-logo" />
          </Link>
          <button className="close-btn" onClick={closeAllMenus}>
            <FaTimes />
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" onClick={closeAllMenus}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeAllMenus}>About Us</Link>
          </li>
          <li className="mobile-dropdown-container">
            <div
              className="mobile-dropdown-toggle"
              onClick={toggleMobileServicesDropdown}
            >
              Services{" "}
              {isMobileServicesDropdownOpen ? (
                <FaAngleDown />
              ) : (
                <FaAngleRight />
              )}
            </div>
            {isMobileServicesDropdownOpen && (
              <ul className="mobile-services-dropdown-menu">
                <li>
                  {/* MOBILE HASH LINK UPDATE */}
                  <Link smooth to="/services#pillars" onClick={closeAllMenus}>
                    - All Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/it-modernization" onClick={closeAllMenus}>
                    - IT Modernization
                  </Link>
                </li>
                <li>
                  <Link to="/services/cybersecurity" onClick={closeAllMenus}>
                    - Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link to="/services/managed-it" onClick={closeAllMenus}>
                    - Managed IT
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/articles" onClick={closeAllMenus}>Articles</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeAllMenus}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;