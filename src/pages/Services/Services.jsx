import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCloud, FaLock, FaNetworkWired } from "react-icons/fa";

// Assets from your image folder
import ServiceHero from "../../assets/service-bg.jpg";
import EcosystemBg from "../../assets/service-dark.jpg";
import ModernizationImg from "../../assets/history-img-4.jpg";
import CybersecurityImg from "../../assets/managed-it3.jpg";
import ManagedImg from "../../assets/managed-it-hero.jpg";
import TechStackImg from "../../assets/strategy-bg.jpg";

import "./Services.css";

const Services = () => {
  return (
    <div className="services-page-container">
      {/* 1. FULL INTRO SECTION - VERBATIM FROM DOCS */}
      <section
        className="services-hero-detailed"
        style={{ backgroundImage: `url(${ServiceHero})` }}
      >
        <div className="overlay"></div>
        <div className="container hero-content-wrapper">
          <div className="hero-text-block">
            <span className="hero-badge">OUR MISSION</span>
            <h1>
              IT Infrastructure as a{" "}
              <span className="highlight">Competitive Advantage.</span>
            </h1>

            <div className="full-intro-text">
              <p className="intro-lead">
                In today’s fast-moving digital landscape, your IT infrastructure
                should be a competitive advantage not a hidden liability. At IT
                CONSULT we turn complex technology into secure, reliable, and
                high-performing business systems.
              </p>
              <p>
                We specialize in infrastructure modernization, cybersecurity
                strengthening, and fully managed IT services. From upgrading
                legacy systems and migrating to the cloud to hardening security
                and managing identity and access controls, we deliver practical
                solutions that improve performance, reduce risk, and control
                costs.
              </p>
              <p>
                Our approach goes beyond fixing issues, we provide strategic
                oversight, strong governance, and proactive support to keep your
                operations stable, secure, and optimized.
              </p>
              <p className="intro-goal">
                <strong>Our goal is simple:</strong> to provide well-managed,
                secure technology that enables your business to grow with
                confidence.
              </p>
            </div>

            <div className="hero-cta-group">
              <a href="#pillars" className="btn btn-primary">
                Explore Our Pillars
              </a>
              <Link to="/contact" className="btn btn-outline">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

{/* 2. CORE SERVICE PILLARS - MODERNIZED */}
<section id="pillars" className="pillars-showcase">
  <div className="container">
    <div className="showcase-intro">
      <span className="sc-badge">Core Pillars</span>
      <h2 className="sc-title">Engineered for Excellence</h2>
    </div>

    <div className="sc-stack">
      {/* Pillar 1: IT Modernization */}
      <div className="sc-card">
        <div className="sc-image-box">
          <img src={ModernizationImg} alt="IT Modernization" />
          <div className="sc-number">01</div>
        </div>
        <div className="sc-content">
          <div className="sc-text-wrapper">
            <h3>IT Modernization</h3>
            <p className="sc-lead">The Foundation for a Scalable Future.</p>
            <p className="sc-desc">
              We move your business away from legacy debt and toward a 
              high-performance environment that is agile, resilient, and cost-effective.
            </p>
            <Link to="/services/it-modernization" className="sc-link-btn">
              Explore Modernization <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Pillar 2: Cybersecurity */}
      <div className="sc-card">
        <div className="sc-image-box">
          <img src={CybersecurityImg} alt="Cybersecurity" />
          <div className="sc-number">02</div>
        </div>
        <div className="sc-content">
          <div className="sc-text-wrapper">
            <h3>Cybersecurity & Risk</h3>
            <p className="sc-lead">Fortifying Assets. Protecting Your Future.</p>
            <p className="sc-desc">
              Our focus is on Proactive Resilience: hardening your infrastructure, 
              controlling data access, and ensuring global compliance.
            </p>
            <Link to="/services/cybersecurity" className="sc-link-btn">
              Explore Security <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Pillar 3: Managed IT */}
      <div className="sc-card">
        <div className="sc-image-box">
          <img src={ManagedImg} alt="Managed IT" />
          <div className="sc-number">03</div>
        </div>
        <div className="sc-content">
          <div className="sc-text-wrapper">
            <h3>Managed Services</h3>
            <p className="sc-lead">Streamlined Operations. Uninterrupted Growth.</p>
            <p className="sc-desc">
              We provide a proactive, "always-on" IT department that anticipates 
              problems before they occur, letting you focus on high-value goals.
            </p>
            <Link to="/services/managed-it" className="sc-link-btn">
              Explore Managed IT <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* 3. TECHNOLOGY ECOSYSTEM - FULL VERBATIM FROM DOCS */}
      {/* 3. TECHNOLOGY ECOSYSTEM - EVOLVED DESIGN */}
      <section className="eco-evolution-section">
        {/* The background is now handled via CSS for better parallax control */}
        <div className="eco-overlay"></div>

        <div className="container">
          <div className="eco-header-v2">
            <span className="eco-badge">Strategic Partners</span>
            <h2 className="eco-title-v2">Our Technology Ecosystem</h2>
            <p className="eco-subtitle-v2">
              We partner with industry-leading vendors to build, secure, and
              manage your business. Our stack is chosen for its
              interoperability, enterprise-grade reliability, and scalability.
            </p>
          </div>

          <div className="eco-bento-grid">
            {/* 1. Cloud & Productivity */}
            <div className="eco-island cloud-island">
              <div className="island-glow"></div>
              <div className="island-content">
                <div className="island-icon-box">
                  <FaCloud className="main-icon" />
                </div>
                <span className="island-tag">The Digital Workplace</span>
                <h4>Cloud & Productivity</h4>
                <p className="island-intro">
                  Unified environment for collaboration and data management via
                  the Microsoft Ecosystem.
                </p>
                <ul className="island-list">
                  <li>
                    <strong>Microsoft 365:</strong> Productivity and high-uptime
                    professional email.
                  </li>
                  <li>
                    <strong>SharePoint & OneDrive:</strong> Cloud-native
                    document management.
                  </li>
                  <li>
                    <strong>Microsoft Azure:</strong> Scalable computing and SQL
                    databases.
                  </li>
                  <li>
                    <strong>Entra ID:</strong> The backbone of identity and SSO.
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Cybersecurity & Defence */}
            <div className="eco-island security-island">
              <div className="island-glow"></div>
              <div className="island-content">
                <div className="island-icon-box">
                  <FaLock className="main-icon" />
                </div>
                <span className="island-tag">The Shield</span>
                <h4>Cybersecurity & Defence</h4>
                <p className="island-intro">
                  Multi-layered hardware and software to eliminate single points
                  of failure.
                </p>
                <ul className="island-list">
                  <li>
                    <strong>Sophos & Fortinet:</strong> NGFW Firewalls for deep
                    packet inspection.
                  </li>
                  <li>
                    <strong>Bitdefender & EDR:</strong> Stopping ransomware at
                    the device level.
                  </li>
                  <li>
                    <strong>Scalefusion (MDM):</strong> Secure and track mobile
                    laptop assets.
                  </li>
                  <li>
                    <strong>Acronis Cyber Protect:</strong> AI-based backup and
                    disaster recovery.
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Infrastructure & Networking */}
            <div className="eco-island infra-island">
              <div className="island-glow"></div>
              <div className="island-content">
                <div className="island-icon-box">
                  <FaNetworkWired className="main-icon" />
                </div>
                <span className="island-tag">The Backbone</span>
                <h4>Infrastructure & Networking</h4>
                <p className="island-intro">
                  Tier 1 hardware ensuring your physical environment matches
                  your cloud speed.
                </p>
                <ul className="island-list">
                  <li>
                    <strong>HP, Dell & Lenovo:</strong> Enterprise-grade
                    workstations and servers.
                  </li>
                  <li>
                    <strong>Cisco & Ubiquiti:</strong> Core switching power and
                    Wi-Fi mesh systems.
                  </li>
                  <li>
                    <strong>Ruijie:</strong> High-performance, cost-effective
                    network scalability.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 4. COMPACT SLICK CTA */}
<section className="compact-cta-ribbon">
  <div className="container">
    <div className="ribbon-glass">
      {/* Background visual is now just a subtle accent thumb */}
      <div className="ribbon-thumb" style={{ backgroundImage: `url(${TechStackImg})` }}></div>
      
      <div className="ribbon-content">
        <div className="ribbon-text">
          <span className="ribbon-badge">Next Step</span>
          <h3>Ready to Architect <span className="text-teal">Growth?</span></h3>
          <p>Turn your IT from a hidden liability into a competitive advantage.</p>
        </div>
        
        <div className="ribbon-action">
          <Link to="/contact" className="glow-pill-btn">
            Start the Conversation
            <div className="pill-reflection"></div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Services;
