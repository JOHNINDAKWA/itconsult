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

import TechSourcingImage from '../../../assets/service-dark.jpg'; // used in hero bg
import Gains from '../../../assets/gains5.jpg'; // reuse consistent gains image
import './TechSourcing.css';
import OtherServices from '../OtherServices/OtherServices';

const TechSourcing = () => {
  return (
    <section id="tech-sourcing" className="services-detail-section techsourcing-bg">
      <div className="overlay">
        <div className="container">
          {/* Title + Intro */}
          <h2 className="services-detail-title">Technology Sourcing & Project Execution</h2>
          <p className="services-detail-intro">
            Having the right tech is one thing—getting it implemented properly and adopted by your team is another.
            We lead end-to-end delivery, source the right solutions and talent, and make sure everything lands smoothly
            and delivers value.
          </p>

          {/* 2x2 Grid of cards (consistent with other pages) */}
          <div className="services-detail-grid">
            <div className="tech-card">
              <div className="advisory-icon"><FaNetworkWired /></div>
              <div className="advisory-content">
                <h3>End-to-End Project Leadership</h3>
                <p>From planning to go-live, we manage scope, budget, timelines, vendors, and risks to guarantee predictable delivery.</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="advisory-icon"><FaTools /></div>
              <div className="advisory-content">
                <h3>Resource & Solution Sourcing</h3>
                <p>Hardware, software, licenses, and skilled professionals—curated and procured to fit your goals and constraints.</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="advisory-icon"><FaPuzzlePiece /></div>
              <div className="advisory-content">
                <h3>Solution Integration</h3>
                <p>We connect new systems to your existing stack, unify data, and eliminate silos so everything works together.</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="advisory-icon"><FaUserGraduate /></div>
              <div className="advisory-content">
                <h3>Adoption Enablement</h3>
                <p>Training, change management, and benefits tracking—so users are confident and ROI is clear.</p>
              </div>
            </div>
          </div>

          {/* What You Gain (text + image split, same as others) */}
          <div className="services-gains-upgraded">
            <div className="gains-content">
              <h4>What You Gain</h4>
              <ul>
                <li>
                  <span className="gains-icon"><FaCheckCircle /></span>
                  Rollouts that don’t disrupt operations
                </li>
                <li>
                  <span className="gains-icon"><FaRocket /></span>
                  Support from procurement through launch
                </li>
                <li>
                  <span className="gains-icon"><FaCogs /></span>
                  Systems that integrate cleanly and scale
                </li>
                <li>
                  <span className="gains-icon"><FaUsers /></span>
                  Confident employees who actually use the tools
                </li>
              </ul>
            </div>
            <div className="gains-image">
              <img src={Gains} alt="Technology sourcing outcomes" />
            </div>
          </div>

          {/* Other services nav */}
          <OtherServices currentServiceLink="/services/tech-sourcing" />

          {/* CTA (matches shared CTA section) */}
          <div className="cta-section">
            <h3 className="cta-title">Ready for Your Next Project?</h3>
            <p className="cta-subtitle">
              Our experts will guide your technology projects to a successful conclusion—on time and on budget.
            </p>
            <Link to="/contact" className="btn btn-primary cta-btn">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSourcing;
