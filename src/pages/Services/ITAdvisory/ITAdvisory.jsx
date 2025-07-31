// src/pages/ITAdvisory.jsx

import React from 'react';
import {
  FaProjectDiagram,
  FaBalanceScale,
  FaUserTie,
  FaPuzzlePiece,
  FaCheckCircle,
  FaChartLine,
  FaLightbulb,
  FaRocket,
} from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link
import Gains from '../../../assets/gains.png';
import './ITAdvisory.css';

const ITAdvisory = () => {
  return (
    <section id="it-advisory" className="services-detail-section advisory-bg">
      <div className="overlay">
        <div className="container">
          <h2 className="services-detail-title">IT Advisory & Consulting</h2>
          <p className="services-detail-intro">
            Helping your business use technology in a smarter, more strategic way. Many businesses invest in technology without a clear plan, leading to wasted money and inefficiency. We provide expert advice, strategic planning, and guidance to help you succeed.
          </p>

          <div className="services-detail-grid">
            {/* Digital Transformation */}
            <div className="advisory-card">
              <div className="advisory-icon">
                <FaProjectDiagram />
              </div>
              <div className="advisory-content">
                <h3>Digital Transformation Roadmapping</h3>
                <p>
                  Step-by-step plans to modernize your operations using cloud, AI, IoT, or automation — replacing outdated tech and boosting efficiency.
                </p>
              </div>
            </div>

            {/* Business-Technology Alignment */}
            <div className="advisory-card">
              <div className="advisory-icon">
                <FaBalanceScale />
              </div>
              <div className="advisory-content">
                <h3>Business-Technology Alignment</h3>
                <p>
                  We analyze your goals, processes, and pain points, then recommend tech solutions that directly support business performance and growth.
                </p>
              </div>
            </div>

            {/* Executive Advisory */}
            <div className="advisory-card">
              <div className="advisory-icon">
                <FaUserTie />
              </div>
              <div className="advisory-content">
                <h3>Executive Advisory</h3>
                <p>
                  We guide CEOs, CFOs, and boards on investment planning, emerging trends, and how to prepare for digital disruption in their sector.
                </p>
              </div>
            </div>

            {/* Vendor Selection */}
            <div className="advisory-card">
              <div className="advisory-icon">
                <FaPuzzlePiece />
              </div>
              <div className="advisory-content">
                <h3>Vendor Selection & Solution Design</h3>
                <p>
                  We evaluate software, hardware, and cloud solutions, and recommend the best fit for your budget, needs, and long-term value.
                </p>
              </div>
            </div>
          </div>

          <div className="services-gains-upgraded">

            
            {/* Right: Image */}
            <div className="gains-image">
              <img src={Gains} alt="Thinking person" />
            </div>
            {/* Left: Gains List */}
            <div className="gains-content">
              <h4>What You Gain</h4>
              <ul>
                <li>
                  <span className="gains-icon">
                    <FaCheckCircle />
                  </span>
                  A long-term tech plan that makes sense
                </li>
                <li>
                  <span className="gains-icon">
                    <FaChartLine />
                  </span>
                  Clearer decisions on what to invest in
                </li>
                <li>
                  <span className="gains-icon">
                    <FaLightbulb />
                  </span>
                  Smarter spending with reduced waste
                </li>
                <li>
                  <span className="gains-icon">
                    <FaRocket />
                  </span>
                  Competitive edge through innovation
                </li>
              </ul>
            </div>

          </div>
          
          {/* New CTA Section */}
          <div className="cta-section">
            <h3 className="cta-title">Ready to Transform Your Business?</h3>
            <p className="cta-subtitle">Let's build a smarter, more strategic future for your company, starting today.</p>
            <Link to="/contact" className="btn btn-primary cta-btn">
              Schedule a Consultation
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ITAdvisory;