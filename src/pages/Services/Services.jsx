// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import {
  FaRegLightbulb,
  FaShieldAlt,
  FaServer,
  FaProjectDiagram,
  FaArrowRight,
  FaSearch,
  FaCubes,
  FaCode,
  FaChartLine,
} from "react-icons/fa";

// Import the background images
import itAdvisoryBg from "../../assets/managed-it3.jpg"; // Replace with your actual image paths
import grcBg from "../../assets/grc-hero.jpg";
import managedItBg from "../../assets/maneged-it2.jpg";
import techSourcingBg from "../../assets/service-dark.jpg";

const Services = () => {
  return (
    <>
      {/* Intro Section */}
      <section className="services-section">
        <div className="services-container services-intro">
          <div className="services-intro-left">
            <p className="services-subtitle">WHAT WE DO</p>
            <h1 className="services-title">
              Strategic IT Solutions for Sustainable Growth
            </h1>
          </div>
          <div className="services-intro-right">
            <p className="services-description">
              We deliver impact-driven services across four core practice areas
              designed to transform, secure, and future-proof your business.
            </p>
            <a href="#it-advisory" className="services-btn">
              All Services
            </a>
          </div>
        </div>
      </section>

      {/* Top Steps Overview with Links */}
      <section className="services-section-cards">
        <div className="services-container services-cards-grid">
          {/* IT Advisory & Consulting Card */}
          {/* We'll use inline styles to apply the background image from the imported variable */}
          <Link
            to="/services/it-advisory"
            className="services-card services-step-0"
            style={{ backgroundImage: `url(${itAdvisoryBg})` }}
          >
            <div className="card-overlay"></div>
            <div className="services-card-content">
              <div className="services-card-header">
                <h3>IT Advisory & Consulting</h3>
                <span className="services-icon">
                  <FaRegLightbulb />
                </span>
              </div>
              <p>
                Helping your business use technology in a smarter, more strategic
                way.
              </p>
              <div className="services-card-link-container">
                <span className="services-card-link">
                  View More <FaArrowRight />
                </span>
              </div>
            </div>
          </Link>

          {/* Governance, Risk & Compliance Card */}
          <Link
            to="/services/grc"
            className="services-card services-step-1"
            style={{ backgroundImage: `url(${grcBg})` }}
          >
            <div className="card-overlay"></div>
            <div className="services-card-content">
              <div className="services-card-header">
                <h3>Governance, Risk & Compliance</h3>
                <span className="services-icon">
                  <FaShieldAlt />
                </span>
              </div>
              <p>
                Making sure your data and systems are secure, legal, and
                resilient.
              </p>
              <div className="services-card-link-container">
                <span className="services-card-link">
                  View More <FaArrowRight />
                </span>
              </div>
            </div>
          </Link>

          {/* Managed IT Services Card */}
          <Link
            to="/services/managed-it"
            className="services-card services-step-2"
            style={{ backgroundImage: `url(${managedItBg})` }}
          >
            <div className="card-overlay"></div>
            <div className="services-card-content">
              <div className="services-card-header">
                <h3>Managed IT Services</h3>
                <span className="services-icon">
                  <FaServer />
                </span>
              </div>
              <p>We manage your IT so you don’t have to worry about it.</p>
              <div className="services-card-link-container">
                <span className="services-card-link">
                  View More <FaArrowRight />
                </span>
              </div>
            </div>
          </Link>

          {/* Technology Sourcing & Projects Card */}
          <Link
            to="/services/tech-sourcing"
            className="services-card services-step-3"
            style={{ backgroundImage: `url(${techSourcingBg})` }}
          >
            <div className="card-overlay"></div>
            <div className="services-card-content">
              <div className="services-card-header">
                <h3>Technology Sourcing & Projects</h3>
                <span className="services-icon">
                  <FaProjectDiagram />
                </span>
              </div>
              <p>
                We help you find, implement, and adopt the right technology
                end-to-end.
              </p>
              <div className="services-card-link-container">
                <span className="services-card-link">
                  View More <FaArrowRight />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>


      {/* Redesigned Service Delivery Framework Section */}
      <section className="framework-section">
        <div className="services-container">
          <p className="section-subtitle">OUR PROCESS</p>
          <h2 className="section-title">Service Delivery Framework</h2>
          <p className="section-intro">
            We follow a proven methodology to ensure every engagement delivers measurable results and long-term value.
          </p>

          <div className="framework-steps-grid">
            <div className="framework-step-card">
              <span className="framework-icon-circle"><FaSearch /></span>
              <div className="framework-content">
                <h3>1. Discover</h3>
                <p>A deep-dive assessment to understand your business goals, challenges, and current tech posture.</p>
              </div>
            </div>
            <div className="framework-step-card">
              <span className="framework-icon-circle"><FaCubes /></span>
              <div className="framework-content">
                <h3>2. Architect</h3>
                <p>We design a bespoke solution, selecting the right technologies and partners for your unique needs.</p>
              </div>
            </div>
            <div className="framework-step-card">
              <span className="framework-icon-circle"><FaCode /></span>
              <div className="framework-content">
                <h3>3. Execute</h3>
                <p>Agile implementation with full project leadership, keeping the project on track, on budget, and on time.</p>
              </div>
            </div>
            <div className="framework-step-card">
              <span className="framework-icon-circle"><FaChartLine /></span>
              <div className="framework-content">
                <h3>4. Optimize</h3>
                <p>Ongoing support, continuous improvement, and performance audits to ensure maximum ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Success Path Section */}
      <section className="success-path-section-redesign" id="success-path">
  <div className="services-container p-relative">
    <div className="success-para text-center">
      <p className="section-subtitle">YOUR JOURNEY</p>
      <h2 className="section-title-white">The IT Consult Success Path</h2>
      <p className="section-intro-white">
        Every engagement follows a clear and proven process designed to
        maximize results and minimize risk.
      </p>
    </div>

    <div className="success-path-steps-line flex flex-center gap-1 flex-wrap">
      <div className="success-path-step-circle step-1">
        <h2>01.</h2>
        <h4>Initial Engagement</h4>
        <p>We begin with a deep conversation to understand your goals.</p>
      </div>
      <div className="success-path-step-circle step-2">
        <h2>02.</h2>
        <h4>Planning</h4>
        <p>We map out a strategic tech roadmap with timelines and KPIs.</p>
      </div>
      <div className="success-path-step-circle step-3">
        <h2>03.</h2>
        <h4>Solution Sourcing</h4>
        <p>We help you procure the right tools, software, and people.</p>
      </div>
      <div className="success-path-step-circle step-4">
        <h2>04.</h2>
        <h4>Implementation & Training</h4>
        <p>From deployment to hands-on training for smooth adoption.</p>
      </div>
      <div className="success-path-step-circle step-5">
        <h2>05.</h2>
        <h4>Ongoing Support</h4>
        <p>We stay with you long-term, measuring, and supporting your systems.</p>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Services;