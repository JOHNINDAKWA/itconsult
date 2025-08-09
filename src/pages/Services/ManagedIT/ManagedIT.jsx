// src/pages/ManagedIT.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaServer,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaCheck,
} from 'react-icons/fa';

import ManagedItImage from '../../../assets/managed-it-hero.jpg';
import DeviceBuyback from '../../../assets/device-buyback.jpg';
import Gains from '../../../assets/gains4.jpg'; // reuse the same style as others (or swap to another image if you prefer)

import './ManagedIT.css';
import OtherServices from '../OtherServices/OtherServices';

const ManagedIT = () => {
  return (
    <section id="managed-it" className="services-detail-section managedit-bg">
      <div className="overlay">
        <div className="container">
          {/* Title + Intro */}
          <h2 className="services-detail-title">Managed IT Services</h2>
          <p className="services-detail-intro">
            We act as your full IT department—proactively monitoring, securing, and supporting your environment so your business can stay focused on results. From infrastructure to end-user support, we keep everything running smoothly.
          </p>

          {/* Service Detail Grid (same structure as other pages) */}
          <div className="services-detail-grid">
            {/* Card 1 */}
            <div className="managed-card">
              <div className="advisory-icon">
                <FaServer />
              </div>
              <div className="advisory-content">
                <h3>Infrastructure Management</h3>
                <p>
                  24/7 monitoring for servers, networks, and cloud systems with proactive maintenance and patching to reduce downtime and prevent issues before they escalate.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="managed-card">
              <div className="advisory-icon">
                <FaShieldAlt />
              </div>
              <div className="advisory-content">
                <h3>Security Operations (SOC)</h3>
                <p>
                  Threat detection, vulnerability management, and incident response—backed by clear runbooks and rapid remediation to keep your environment safe.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="managed-card">
              <div className="advisory-icon">
                <FaUsers />
              </div>
              <div className="advisory-content">
                <h3>End-User Support</h3>
                <p>
                  Friendly, responsive help for your team—device setup, updates, troubleshooting, and lifecycle management to keep everyone productive.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="managed-card">
              <div className="advisory-icon">
                <FaChartLine />
              </div>
              <div className="advisory-content">
                <h3>Performance & Cost Optimization</h3>
                <p>
                  Continuous analysis of usage and performance with recommendations that improve reliability and reduce waste—so you only pay for what you need.
                </p>
              </div>
            </div>
          </div>

          {/* Service Spotlight (Device Buyback) — tasteful band, same page style */}
          <div className="service-spotlight">
            <div className="spotlight-content">
              <h4>Service Spotlight: Device Buyback & Upgrade Support</h4>
              <p>
                Turn outdated laptops into value—free up budgets and boost productivity with compliant data wiping and seamless device refresh.
              </p>
              <ul className="spotlight-list">
                <li><FaCheck /> Assessment of device condition and fair valuation</li>
                <li><FaCheck /> Direct purchase at market-aligned rates</li>
                <li><FaCheck /> Offsetting costs for new equipment</li>
                <li><FaCheck /> Secure data erasure and compliant disposal</li>
              </ul>
            </div>
            <div className="spotlight-image">
              <img src={DeviceBuyback} alt="Device Buyback & Upgrade Support" />
            </div>
          </div>

          {/* What You Gain (same pattern as others: text + image) */}
          <div className="services-gains-upgraded">
            {/* Left: Gains text */}
            <div className="gains-content">
              <h4>What You Gain</h4>
              <ul>
                <li>
                  <span className="gains-icon"><FaUsers /></span>
                  Fast, friendly support that keeps your team moving
                </li>
                <li>
                  <span className="gains-icon"><FaChartLine /></span>
                  Predictable IT with minimal downtime and surprises
                </li>
                <li>
                  <span className="gains-icon"><FaShieldAlt /></span>
                  Strong cybersecurity posture and rapid incident handling
                </li>
                <li>
                  <span className="gains-icon"><FaServer /></span>
                  Scalable infrastructure ready for growth
                </li>
              </ul>
            </div>
            {/* Right: Gains image */}
            <div className="gains-image">
              <img src={Gains} alt="Managed IT outcomes" />
            </div>
          </div>

          {/* Other services nav */}
          <OtherServices currentServiceLink="/services/managed-it" />

          {/* CTA (same structure/style) */}
          <div className="cta-section">
            <h3 className="cta-title">Ready for IT that just works?</h3>
            <p className="cta-subtitle">
              Switch to our managed services and get back to your business.
            </p>
            <Link to="/contact" className="btn btn-primary cta-btn">
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedIT;
