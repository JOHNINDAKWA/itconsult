import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaNetworkWired, 
  FaCloudUploadAlt, 
  FaBuilding, 
  FaMicrochip,
  FaCheck,
  FaChartBar,
  FaStethoscope,
  FaShieldAlt
} from 'react-icons/fa';

import HeroBg from '../../../assets/service-dark.jpg'; 
import GainsImg from '../../../assets/gains5.jpg'; 
import SpotlightImg from '../../../assets/history-img-4.jpg';
import OtherServices from '../OtherServices/OtherServices';
import './ITModernization.css';

const ITModernization = () => {
  return (
    <section id="it-modernization" className="services-detail-section modernization-bg">
      <div className="overlay">
        <div className="container">
          {/* Service Pillar 01 - Header */}
      
          <h2 className="services-detail-title">IT Modernization</h2>
          <p className="services-detail-intro">
            The Foundation for a Scalable Future. In an era where downtime equals lost revenue, 
            your IT foundation must be more than just functional, it must be a catalyst for growth. 
            We move your business away from the limitations of legacy debt and toward a high-performance 
            environment that is agile, resilient, and cost-effective.
          </p>

          {/* Core Specializations Grid */}
          <div className="services-detail-grid">
            {/* Spec 1 */}
            <div className="managed-card">
              <div className="advisory-icon"><FaMicrochip /></div>
              <div className="advisory-content">
                <h3>Next-Gen Infrastructure Upgrades</h3>
                <p>We replace aging hardware with high-performance solutions. From modernizing server stacks and storage arrays to optimizing networking and virtualization, we ensure your core systems are fast, reliable, and energy-efficient.</p>
              </div>
            </div>

            {/* Spec 2 */}
            <div className="managed-card">
              <div className="advisory-icon"><FaCloudUploadAlt /></div>
              <div className="advisory-content">
                <h3>Strategic Cloud & Hybrid Migrations</h3>
                <p>Whether you are moving fully to the cloud or maintaining a hybrid environment, we manage the transition end-to-end, focusing on data integrity, minimal downtime, and optimizing your cloud spend.</p>
              </div>
            </div>

            {/* Spec 3 */}
            <div className="managed-card">
              <div className="advisory-icon"><FaBuilding /></div>
              <div className="advisory-content">
                <h3>New Office & Branch IT Deployment</h3>
                <p>Scaling your footprint shouldn't be a headache. We provide "turnkey" IT setups—handling everything from structured cabling and Wi-Fi heatmaps to hardware provisioning and connectivity.</p>
              </div>
            </div>

            {/* Spec 4 */}
            <div className="managed-card">
              <div className="advisory-icon"><FaShieldAlt /></div>
              <div className="advisory-content">
                <h3>Resilience through Backup & Continuity</h3>
                <p>Protecting data is non-negotiable. We design "Always-On" architectures with automated backups and rapid disaster recovery protocols to ensure your business stays operational in any scenario.</p>
              </div>
            </div>

            {/* Spec 5 */}
            <div className="managed-card">
              <div className="advisory-icon"><FaChartBar /></div>
              <div className="advisory-content">
                <h3>Forward-Looking IT Roadmaps</h3>
                <p>We act as your virtual CTO, aligning technology roadmaps with your long-term goals to ensure you spend your budget on tools that actually drive business results.</p>
              </div>
            </div>

            {/* Spec 6 */}
            <div className="managed-card">
              <div className="advisory-icon"><FaStethoscope /></div>
              <div className="advisory-content">
                <h3>Continuous Health Checks</h3>
                <p>Infrastructure isn't "set and forget." We perform routine audits and performance tuning to identify bottlenecks before they impact your team, keeping systems at peak efficiency.</p>
              </div>
            </div>
          </div>

          {/* Service Spotlight */}
          <div className="service-spotlight">
            <div className="spotlight-content">
              <h4>Strategy Spotlight: Eliminating Legacy Debt</h4>
              <p>We don't just maintain hardware; we architect growth. By modernizing your IT ecosystem, we provide the reliability and scalability you need to lead your industry.</p>
              <ul className="spotlight-list">
                <li><FaCheck /> Assessment of existing legacy bottlenecks</li>
                <li><FaCheck /> Seamless transition to modern high-performance stacks</li>
                <li><FaCheck /> Reduction of maintenance overhead and energy costs</li>
              </ul>
            </div>
            <div className="spotlight-image">
              <img src={SpotlightImg} alt="Modernization Strategy" />
            </div>
          </div>

          {/* What You Gain */}
          <div className="services-gains-upgraded">
            <div className="gains-content">
              <h4>What You Gain</h4>
              <ul>
                <li>
                  <span className="gains-icon"><FaCheck /></span>
                  Elimination of legacy debt and performance bottlenecks
                </li>
                <li>
                  <span className="gains-icon"><FaCheck /></span>
                  Scalable "Always-On" architecture for business continuity
                </li>
                <li>
                  <span className="gains-icon"><FaCheck /></span>
                  Technology roadmaps aligned with long-term business goals
                </li>
                <li>
                  <span className="gains-icon"><FaCheck /></span>
                  Energy-efficient, high-performance server and cloud stacks
                </li>
              </ul>
            </div>
            <div className="gains-image">
              <img src={GainsImg} alt="IT Modernization outcomes" />
            </div>
          </div>

          <OtherServices currentServiceLink="/services/it-modernization" />

          {/* Bottom CTA */}
          <div className="cta-section">
            <h3 className="cta-title">Architect Your Growth.</h3>
            <p className="cta-subtitle">
              Turn your complex technology into a secure, reliable, and high-performing business system today.
            </p>
            <Link to="/contact" className="btn btn-primary cta-btn">
              Start Your Modernization
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITModernization;