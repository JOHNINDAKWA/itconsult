import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaServer,
  FaHeadset,
  FaSignal,
  FaChartLine,
  FaHandshake,
  FaTools,
  FaCheck
} from 'react-icons/fa';

import ManagedItImage from '../../../assets/managed-it-hero.jpg';
import DeviceBuyback from '../../../assets/device-buyback.jpg';
import Gains from '../../../assets/gains4.jpg'; 

import './ManagedIT.css';
import OtherServices from '../OtherServices/OtherServices';

const ManagedIT = () => {
  return (
    <section id="managed-it" className="services-detail-section managedit-bg">
      <div className="overlay">
        <div className="container">
          {/* Service Pillar 03 - Header */}
          <h2 className="services-detail-title">Managed Services</h2>
          <p className="services-detail-intro">
            Streamlined Operations. Uninterrupted Growth. Technology should empower your team, not distract them. 
            We provide a proactive, "always-on" IT department that anticipates problems before they occur.
          </p>

          {/* Core Specializations Grid */}
          <div className="services-detail-grid">
            {/* Spec 1: Infrastructure */}
            <div className="managed-card">
              <div className="advisory-icon"><FaServer /></div>
              <div className="advisory-content">
                <h3>Proactive Managed Infrastructure</h3>
                <p>We take full ownership of your servers and cloud environments, ensuring core systems are patched, updated, and tuned for peak performance without you lifting a finger.</p>
              </div>
            </div>

            {/* Spec 2: Helpdesk */}
            <div className="managed-card">
              <div className="advisory-icon"><FaHeadset /></div>
              <div className="advisory-content">
                <h3>Rapid-Response Helpdesk</h3>
                <p>Dedicated technical support that resolves end-user issues quickly, minimizing downtime and keeping your workforce productive and frustrated-free.</p>
              </div>
            </div>

            {/* Spec 3: Monitoring */}
            <div className="managed-card">
              <div className="advisory-icon"><FaSignal /></div>
              <div className="advisory-content">
                <h3>24/7 Network Monitoring</h3>
                <p>Advanced monitoring tools scan your network around the clock for performance dips or anomalies, allowing us to remediate issues silently in the background.</p>
              </div>
            </div>

            {/* Spec 4: Cost Optimization */}
            <div className="managed-card">
              <div className="advisory-icon"><FaChartLine /></div>
              <div className="advisory-content">
                <h3>Strategic Budgeting & ROI</h3>
                <p>We analyse technology spend to identify redundancies and optimize cloud costs, ensuring every dollar in your IT budget drives maximum ROI.</p>
              </div>
            </div>

            {/* Spec 5: Vendor Management */}
            <div className="managed-card">
              <div className="advisory-icon"><FaHandshake /></div>
              <div className="advisory-content">
                <h3>Vendor & License Management</h3>
                <p>We act as your single point of contact for all technology vendors, managing software licenses and hardware warranties so you never overpay.</p>
              </div>
            </div>

            {/* Spec 6: Lifecycle */}
            <div className="managed-card">
              <div className="advisory-icon"><FaTools /></div>
              <div className="advisory-content">
                <h3>Lifecycle Management</h3>
                <p>We treat your IT environment like a high-performance engine, using scheduled maintenance to extend asset life and prevent emergency failures.</p>
              </div>
            </div>
          </div>

          {/* Service Spotlight (Device Buyback) */}
          <div className="service-spotlight">
            <div className="spotlight-content">
              <h4>Service Spotlight: Device Buyback & Upgrade</h4>
              <p>Turn outdated assets into capital. We facilitate compliant data wiping and seamless device refreshes to boost productivity.</p>
              <ul className="spotlight-list">
                <li><FaCheck /> Assessment and fair market valuation</li>
                <li><FaCheck /> Offsetting costs for new high-performance hardware</li>
                <li><FaCheck /> Secure data erasure and compliant disposal</li>
              </ul>
            </div>
            <div className="spotlight-image">
              <img src={DeviceBuyback} alt="Device Buyback Support" />
            </div>
          </div>

          {/* What You Gain */}
          <div className="services-gains-upgraded">
            <div className="gains-content">
              <h4>What You Gain</h4>
              <ul>
                <li>
                  <span className="gains-icon"><FaCheck /></span>
                  Predictable IT costs and optimized technology spend
                </li>
                <li>
                  <span className="gains-icon"><FaCheck /></span>
                  Minimal downtime through 24/7 proactive monitoring
                </li>
                <li>
                  <span className="gains-icon"><FaCheck /></span>
                  Single point of contact for all technology vendors
                </li>
                <li>
                  <span className="gains-icon"><FaCheck /></span>
                  Technology transformed into a seamless engine for success
                </li>
              </ul>
            </div>
            <div className="gains-image">
              <img src={Gains} alt="Managed IT outcomes" />
            </div>
          </div>

          <OtherServices currentServiceLink="/services/managed-it" />

          {/* Positioning Message CTA */}
          <div className="cta-section">
            <h3 className="cta-title">Manage Complexity. Master Growth.</h3>
            <p className="cta-subtitle">
              We eliminate the burden of daily IT management, allowing your leadership to focus on high-value business objectives.
            </p>
            <Link to="/contact" className="btn btn-primary cta-btn">
              Get Proactive Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedIT;