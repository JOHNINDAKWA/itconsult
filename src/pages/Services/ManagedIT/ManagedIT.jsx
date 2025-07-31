// src/pages/ManagedIT.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaServer,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaCheck,
  FaHeadset,
  FaDollarSign,
  FaLightbulb,
  FaLaptop,
} from 'react-icons/fa';
import ManagedItImage from '../../../assets/managed-it-hero.jpg';
import DeviceBuyback from '../../../assets/device-buyback.jpg'; 
import './ManagedIT.css';

const ManagedIT = () => {
  return (
    <div className="managed-it-page">
      <section id="managed-it-hero" className="managed-it-section managed-it-hero">
        <div className="managed-it-grid services-container">
  

          {/* Right Column: Content */}
          <div className="managed-it-content">
            <h2 className="managed-it-title">Managed IT Services</h2>
            <p className="managed-it-subtitle">We manage your IT so you don’t have to worry about it</p>
            <p className="managed-it-description">
              Most companies can’t afford a large in-house IT team. Managed services mean we act as your IT department, proactively monitoring, maintaining, and fixing issues so your business keeps running smoothly.
            </p>
            <div className="managed-it-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaServer />
                </div>
                <div>
                  <h3>Infrastructure Management</h3>
                  <p>
                    We keep an eye on your servers, network, and cloud systems 24/7 to fix issues before they become major problems.
                  </p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaShieldAlt />
                </div>
                <div>
                  <h3>Cyber Operations Centre</h3>
                  <p>
                    Our team monitors your environment, applies security patches, and reacts to any security incidents before they cause damage.
                  </p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaUsers />
                </div>
                <div>
                  <h3>End-User Support</h3>
                  <p>
                    We support your staff directly with any tech issues, handling device setup, updates, and long-term management so they stay productive.
                  </p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaChartLine />
                </div>
                <div>
                  <h3>Performance Optimization</h3>
                  <p>
                    We analyze usage patterns and recommend upgrades to make sure your systems are running efficiently and you're not overpaying for unused services.
                  </p>
                </div>
              </div>
            </div>
          </div>

                  {/* Left Column: Image */}
          <div className="managed-it-image">
            <img src={ManagedItImage} alt="Managed IT Support" />
          </div>
        </div>
      </section>

      {/* Device Buyback Section */}
      <section id="device-buyback" className="buyback-section">
        <div className="services-container buyback-grid">
          <div className="buyback-content">
            <h2 className="buyback-title">Device Buyback & Upgrade Support</h2>
            <p className="buyback-description">
              Turn your older laptops into cash, and upgrade with ease. At IT Consult, we understand that holding onto outdated devices not only slows your team down but also clutters your workspace. That’s why we now offer a Laptop Assessment & Buyback Service.
            </p>
            <ul>
              <li>
                <FaCheck />
                Assess their condition and value
              </li>
              <li>
                <FaCheck />
                Purchase them directly at fair market rates
              </li>
              <li>
                <FaCheck />
                Help you offset the cost of new equipment
              </li>
              <li>
                <FaCheck />
                Ensure safe data wiping and disposal, in line with compliance requirements
              </li>
            </ul>
            <p className="buyback-callout">
              Out with the old, in with the optimized—let us help you upgrade the right way.
            </p>
          </div>
          <div className="buyback-image">
            <img src={DeviceBuyback} alt="Device Buyback service" />
          </div>
        </div>
      </section>

      {/* What You Gain Section */}
      <section id="managed-it-gains" className="gains-section">
        <div className="services-container">
          <h4 className="gains-title">What You Gain</h4>
          <div className="gains-cards-grid">
            <div className="gains-card">
              <div className="gains-icon-circle">
                <FaHeadset />
              </div>
              <h3>Reliable IT with Minimal Downtime</h3>
              <p>Our proactive monitoring and support keep your systems running smoothly, day and night.</p>
            </div>
            <div className="gains-card">
              <div className="gains-icon-circle">
                <FaUsers />
              </div>
              <h3>Fast and Friendly Support for Your Team</h3>
              <p>Your staff gets direct access to our experts, so they can get back to work faster.</p>
            </div>
            <div className="gains-card">
              <div className="gains-icon-circle">
                <FaLightbulb />
              </div>
              <h3>Reduced Tech-Related Stress</h3>
              <p>We handle the complex stuff, giving you peace of mind and more time to focus on your business goals.</p>
            </div>
            <div className="gains-card">
              <div className="gains-icon-circle">
                <FaDollarSign />
              </div>
              <h3>Fixed Monthly IT Costs (No Surprise Bills)</h3>
              <p>Predictable pricing for predictable performance, with no hidden fees or unexpected expenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New CTA Section */}
      <section id="managed-it-cta" className="managed-it-cta-section">
        <div className="services-container">
          <div className="cta-content">
            <h3 className="cta-title">Ready for IT that just works?</h3>
            <p className="cta-subtitle">Switch to our managed services and get back to business.</p>
          </div>
          <Link to="/contact" className="btn cta-btn">
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ManagedIT;