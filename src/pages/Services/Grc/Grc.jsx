// src/pages/GRC.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGavel,
  FaShieldAlt,
  FaClipboardCheck,
  FaSyncAlt,
  FaCheckCircle,
  FaArrowRight,
  FaLock,
  FaExclamationTriangle,
  FaBusinessTime,
  FaBalanceScale,
} from 'react-icons/fa';
import GRCImage from '../../../assets/grc-hero.jpg';
import GainsImage from '../../../assets/gains3.jpg'; 
import './GRC.css';

const GRC = () => {
  return (
    <section id="grc" className="services-detail-section grc-bg">
      <div className="overlay">
        <div className="container">
          <h2 className="services-detail-title">Governance, Risk & Compliance (GRC)</h2>
          <p className="services-detail-intro">
            Making sure your data and systems are secure, legal, and resilient. As businesses become more digital, they face more regulations and cyber threats. GRC services ensure that your IT systems are not only efficient but also secure, compliant, and prepared for anything.
          </p>

          <div className="services-detail-grid">
            {/* Integrated Compliance Framework */}
            <div className="grc-card">
              <div className="advisory-icon">
                <FaGavel />
              </div>
              <div className="advisory-content">
                <h3>Integrated Compliance Framework</h3>
                <p>
                  We build a single, manageable framework to handle all compliance obligations, such as the Kenya Data Protection Act or GDPR. This helps you avoid legal issues, fines, or reputational damage.
                </p>
              </div>
            </div>

            {/* Cyber Resilience Programs */}
            <div className="grc-card">
              <div className="advisory-icon">
                <FaShieldAlt />
              </div>
              <div className="advisory-content">
                <h3>Cyber Resilience Programs</h3>
                <p>
                  We test your systems for weaknesses (vulnerability assessments), simulate attacks (penetration testing), and provide real-time monitoring to catch threats early with our Security Operations Centre (SOC).
                </p>
              </div>
            </div>

            {/* Audit & Assurance Services */}
            <div className="grc-card">
              <div className="advisory-icon">
                <FaClipboardCheck />
              </div>
              <div className="advisory-content">
                <h3>Audit & Assurance Services</h3>
                <p>
                  We help review and write IT policies, check if your controls are effective, and guide you through certification processes like ISO 27001, ensuring you're audit-ready.
                </p>
              </div>
            </div>

            {/* Business Continuity Engineering */}
            <div className="grc-card">
              <div className="advisory-icon">
                <FaSyncAlt />
              </div>
              <div className="advisory-content">
                <h3>Business Continuity Engineering</h3>
                <p>
                  We help build robust backup systems, disaster recovery plans, and redundant infrastructure that ensures your business keeps running even during a major emergency or ransomware attack.
                </p>
              </div>
            </div>
          </div>

          {/* What You Gain Section */}
          <div className="services-gains-upgraded">
            <div className="gains-content">
              <h4>What You Gain</h4>
              <ul>
                <li>
                  <span className="gains-icon"><FaBalanceScale /></span>
                  Confidence in your security and legal standing
                </li>
                <li>
                  <span className="gains-icon"><FaExclamationTriangle /></span>
                  Protection from data breaches and penalties
                </li>
                <li>
                  <span className="gains-icon"><FaBusinessTime /></span>
                  Business continuity during emergencies
                </li>
                <li>
                  <span className="gains-icon"><FaLock /></span>
                  Peace of mind knowing you're audit-ready
                </li>
              </ul>
            </div>
            <div className="gains-image">
              <img src={GainsImage} alt="Person thinking about gains" />
            </div>
          </div>
          
          {/* Call-to-Action (CTA) Section */}
          <div className="cta-section">
            <h3 className="cta-title">Ready to Secure Your Business?</h3>
            <p className="cta-subtitle">Let's build a resilient, compliant, and protected foundation for your company's future.</p>
            <Link to="/contact" className="btn btn-primary cta-btn">
              Schedule a Security Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GRC;