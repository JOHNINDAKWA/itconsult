import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaUserLock, 
  FaClipboardCheck, 
  FaBiohazard, 
  FaUserShield,
  FaCheck
} from 'react-icons/fa';
import { FaFileShield } from "react-icons/fa6";

import HeroBg from '../../../assets/managed-it3.jpg'; 
import GainsImg from '../../../assets/gains4.jpg'; 
import SpotlightImg from '../../../assets/strategy-bg.jpg';
import OtherServices from '../OtherServices/OtherServices';
import './CyberSecurity.css';

const Cybersecurity = () => {
  return (
    <section id="cybersecurity" className="cyber-page-wrapper">
      <div className="cyber-hero-overlay">
        <div className="container">
          
          <div className="cyber-header-content">
            <span className="cyber-badge-top">SERVICE PILLAR 02</span>
            <h2 className="cyber-main-title">Cybersecurity & Risk Management</h2>
            <p className="cyber-main-description">
              Fortifying Your Assets. Protecting Your Future. A reactive approach is no longer enough. 
              At IT CONSULT, we move beyond basic antivirus solutions to build a multi-layered defence system. 
              Our focus is on Proactive Resilience: hardening your infrastructure, controlling access to your data, 
              and ensuring your business meets global compliance standards.
            </p>
          </div>

          {/* THE GRID: Forced 2-column layout */}
          <div className="cyber-features-grid">
            
            <div className="cyber-feature-card">
              <div className="cyber-card-icon"><FaUserLock /></div>
              <div className="cyber-card-text">
                <h3>Precision Identity & Access (IAM)</h3>
                <p>Identity is the new perimeter. We implement robust SSO and MFA using Azure AD (Entra ID) to ensure only authorized users access your critical data.</p>
              </div>
            </div>

            <div className="cyber-feature-card">
              <div className="cyber-card-icon"><FaClipboardCheck /></div>
              <div className="cyber-card-text">
                <h3>Governance, Risk & Compliance (GRC)</h3>
                <p>We navigate the complexities of data protection laws including GDPR and the Kenya Data Protection Act, ensuring your business stays compliant.</p>
              </div>
            </div>

            <div className="cyber-feature-card">
              <div className="cyber-card-icon"><FaBiohazard /></div>
              <div className="cyber-card-text">
                <h3>Advanced Endpoint Protection (EDR)</h3>
                <p>Standard antivirus is obsolete. We deploy EDR to monitor device behavior in real-time, stopping ransomware before it executes.</p>
              </div>
            </div>

            <div className="cyber-feature-card">
              <div className="cyber-card-icon"><FaShieldAlt /></div>
              <div className="cyber-card-text">
                <h3>Network & Perimeter Security</h3>
                <p>We secure your boundaries with Next-Generation Firewalls (NGFW) and Intrusion Prevention Systems (IPS) to block malicious traffic.</p>
              </div>
            </div>

            <div className="cyber-feature-card">
              <div className="cyber-card-icon"><FaFileShield /></div>
              <div className="cyber-card-text">
                <h3>Email & Data Leak Prevention</h3>
                <p>90% of breaches start via email. We implement advanced phishing protection and encryption to prevent sensitive data loss.</p>
              </div>
            </div>

            <div className="cyber-feature-card">
              <div className="cyber-card-icon"><FaUserShield /></div>
              <div className="cyber-card-text">
                <h3>Security Awareness & Training</h3>
                <p>Your team is your first line of defense. We provide ongoing training and simulated phishing attacks to turn employees into a human firewall.</p>
              </div>
            </div>

          </div>

          {/* Spotlight Section */}
          <div className="cyber-spotlight-box">
            <div className="spotlight-text">
              <h4>Defense Spotlight: The Zero-Trust Model</h4>
              <p>We operate on a "Never Trust, Always Verify" philosophy. By segmenting your network, we ensure a single compromised device cannot take down your entire business.</p>
              <ul className="spotlight-check-list">
                <li><FaCheck /> Strict verification for every user</li>
                <li><FaCheck /> Least-privilege access controls</li>
                <li><FaCheck /> Micro-segmentation</li>
              </ul>
            </div>
            <div className="spotlight-img-frame">
              <img src={SpotlightImg} alt="Zero Trust" />
            </div>
          </div>

          <OtherServices currentServiceLink="/services/cybersecurity" />

          {/* CTA Section */}
          <div className="cyber-final-cta">
            <h3>Secure by Design. Resilient by Choice.</h3>
            <p>Don't wait for a breach to happen. Let's harden your defenses today.</p>
            <Link to="/contact" className="cyber-action-btn">
              Get a Security Audit
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cybersecurity;