// src/pages/TechSourcing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaNetworkWired,
  FaTools,
  FaPuzzlePiece,
  FaUserGraduate,
  FaCheckCircle,
  FaRocket,
  FaCogs,
  FaUsers,
} from 'react-icons/fa';
import TechSourcingImage from '../../../assets/service-dark.jpg'; // Placeholder hero image
import './TechSourcing.css';
import OtherServices from '../OtherServices/OtherServices';

const TechSourcing = () => {
  return (
    <div className="tech-sourcing-page">
      <section id="tech-sourcing-hero" className="tech-sourcing-section">
        <div className="services-container tech-sourcing-grid">
          {/* Left: Image (reversed order in CSS) */}
          <div className="tech-sourcing-image">
            <img src={TechSourcingImage} alt="Technology sourcing and project execution" />
          </div>

          {/* Right: Content (reversed order in CSS) */}
          <div className="tech-sourcing-content">
            <p className="tech-sourcing-subtitle">Our Services</p>
            <h2 className="tech-sourcing-title">Technology Sourcing & Project Execution</h2>
            <p className="tech-sourcing-description">
              Having the right tech is one thing. Getting it implemented properly, and making sure your team uses it, is another. We offer full project leadership and sourcing services to ensure smooth rollouts and maximum value.
            </p>

            <div className="tech-sourcing-highlights">
              <div className="highlight-card">
                <div className="highlight-icon"><FaNetworkWired /></div>
                <div>
                  <h3>End-to-End Project Leadership</h3>
                  <p>Whether you're setting up new infrastructure or deploying software, we manage the whole project to ensure it stays on budget, on schedule, and meets expectations.</p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon"><FaTools /></div>
                <div>
                  <h3>Resource & Solution Sourcing</h3>
                  <p>We help you acquire the right hardware, software licenses, skilled IT professionals, and creative teams to get the job done right.</p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon"><FaPuzzlePiece /></div>
                <div>
                  <h3>Solution Integration</h3>
                  <p>We make sure your new technology connects seamlessly with what you already have, unifying your data and avoiding siloed information.</p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon"><FaUserGraduate /></div>
                <div>
                  <h3>Adoption Enablement</h3>
                  <p>We train your team, manage change smoothly, and track the benefits to prove the return on investment of new tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Gain Section (New Design) */}
      <section id="tech-sourcing-gains" className="gains-section-alt">
        <div className="services-container">
          <h4 className="gains-title-alt">What You Gain</h4>
          <div className="gains-list-grid">
            <div className="gain-item">
              <span className="gain-icon-alt"><FaCheckCircle /></span>
              <p>Tech rollouts that don’t disrupt operations</p>
            </div>
            <div className="gain-item">
              <span className="gain-icon-alt"><FaRocket /></span>
              <p>Full support from procurement to launch</p>
            </div>
            <div className="gain-item">
              <span className="gain-icon-alt"><FaCogs /></span>
              <p>Systems that work together smoothly</p>
            </div>
            <div className="gain-item">
              <span className="gain-icon-alt"><FaUsers /></span>
              <p>Employees who are confident using new tools</p>
            </div>
          </div>
        </div>
      </section>

           <OtherServices currentServiceLink="/services/tech-sourcing" />

      {/* CTA Section (New Design) */}
      <section id="tech-sourcing-cta" className="tech-sourcing-cta">
        <div className="services-container tech-sourcing-cta-grid">
          <div className="cta-text">
            <h3>Ready for Your Next Project?</h3>
            <p>Our experts will guide your technology projects to a successful conclusion, on time and on budget.</p>
          </div>
          <Link to="/contact" className="btn cta-btn-alt">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TechSourcing;