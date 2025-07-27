import React from "react";
import "./Services.css";
import {
  FaRegLightbulb,
  FaShieldAlt,
  FaServer,
  FaProjectDiagram,
  FaBalanceScale,
  FaUserTie,
  FaPuzzlePiece,
} from "react-icons/fa";
import {
  FaCheckCircle,
  FaChartLine,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

import {
  FaGavel,
  FaClipboardCheck,
  FaSyncAlt
} from 'react-icons/fa'

import {
  FaNetworkWired,
  FaTools,
  FaUserGraduate
} from 'react-icons/fa';

import TechSourcingImage from '../../assets/service-dark.jpg'; // Replace with your actual image path

import { FaUsers, FaExchangeAlt } from 'react-icons/fa';
import ManagedItImage from '../../assets/managed-it.png';

import Gains from "../../assets/gains.png";

const Services = () => {
  return (
    <>
      {/* Intro Section */}
      <section className="services-section">
        <div className="services-container services-intro">
          <div className="services-intro-left">
            <p className="services-subtitle">WHAT WE DO</p>
            <h1 className="services-title">
              Strategic IT Solutions for Sustainable Growth
            </h1>
          </div>
          <div className="services-intro-right">
            <p className="services-description">
              We deliver impact-driven services across four core practice areas
              designed to transform, secure, and future-proof your business.
            </p>
            <a href="#it-advisory" className="services-btn">
              All Services
            </a>
          </div>
        </div>
      </section>

      {/* Top Steps Overview */}
      <section className="services-section-cards">
        <div className="services-container services-cards-grid">
          <a href="#it-advisory" className="services-card services-step-0">
            <div className="services-card-header">
              <h3>IT Advisory & Consulting</h3>
              <span className="services-icon">
                <FaRegLightbulb />
              </span>
            </div>
            <p>
              Helping your business use technology in a smarter, more strategic
              way.
            </p>
          </a>

          <a href="#grc" className="services-card services-step-1">
            <div className="services-card-header">
              <h3>Governance, Risk & Compliance</h3>
              <span className="services-icon">
                <FaShieldAlt />
              </span>
            </div>
            <p>
              Making sure your data and systems are secure, legal, and
              resilient.
            </p>
          </a>

          <a href="#managed-it" className="services-card services-step-2">
            <div className="services-card-header">
              <h3>Managed IT Services</h3>
              <span className="services-icon">
                <FaServer />
              </span>
            </div>
            <p>We manage your IT so you don’t have to worry about it.</p>
          </a>

          <a href="#tech-sourcing" className="services-card services-step-3">
            <div className="services-card-header">
              <h3>Technology Sourcing & Projects</h3>
              <span className="services-icon">
                <FaProjectDiagram />
              </span>
            </div>
            <p>
              We help you find, implement, and adopt the right technology
              end-to-end.
            </p>
          </a>
        </div>
      </section>

      {/* Detailed Sections */}
      <section id="it-advisory" className="services-detail-section advisory-bg">
        <div className="overlay">
          <div className="services-container">
            <h2 className="services-detail-title">1. IT Advisory & Consulting</h2>
            <p className="services-detail-intro">
              Helping your business use technology in a smarter, more strategic
              way. Many businesses invest in technology without a clear plan,
              leading to wasted money and inefficiency. We provide expert
              advice, strategic planning, and guidance to help you succeed.
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
                    Step-by-step plans to modernize your operations using cloud,
                    AI, IoT, or automation — replacing outdated tech and
                    boosting efficiency.
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
                    We analyze your goals, processes, and pain points, then
                    recommend tech solutions that directly support business
                    performance and growth.
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
                    We guide CEOs, CFOs, and boards on investment planning,
                    emerging trends, and how to prepare for digital disruption
                    in their sector.
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
                    We evaluate software, hardware, and cloud solutions, and
                    recommend the best fit for your budget, needs, and long-term
                    value.
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
          </div>
        </div>
      </section>


<section id="grc" className="services-grc-section">
  <div className="services-grc-overlay">
    <div className="services-container">
      <p className="grc-subtitle">We Also Offer</p>
      <h2 className="grc-title">2. Governance, Risk & Compliance (GRC)</h2>

      <div className="grc-card-grid">
        {/* Full Width Card */}
        <div className="grc-card grc-card--full">
          <div className="grc-card-icon"><FaGavel /></div>
          <div>
            <h3>Integrated Compliance Framework</h3>
            <p>We help you handle all regulatory obligations (like Kenya DPA, GDPR) in one manageable structure — reducing legal risk and ensuring accountability.</p>
            <a href="#grc-details" className="grc-link">Learn More →</a>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grc-card">
          <div className="grc-card-icon"><FaShieldAlt /></div>
          <div>
            <h3>Cyber Resilience Programs</h3>
            <p>We simulate attacks (pen tests), assess vulnerabilities, and monitor your systems in real-time to reduce breach risk.</p>
            <a href="#grc-details" className="grc-link">Learn More →</a>
          </div>
        </div>

        <div className="grc-card">
          <div className="grc-card-icon"><FaClipboardCheck /></div>
          <div>
            <h3>Audit & Assurance Services</h3>
            <p>We guide you through audits and certifications like ISO 27001, reviewing security controls and policies in advance.</p>
            <a href="#grc-details" className="grc-link">Learn More →</a>
          </div>
        </div>

        <div className="grc-card">
          <div className="grc-card-icon"><FaSyncAlt /></div>
          <div>
            <h3>Business Continuity Engineering</h3>
            <p>We build disaster recovery plans, redundant systems, and ensure your business remains operational no matter what happens.</p>
            <a href="#grc-details" className="grc-link">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="managed-it" className="managed-it-section">
  <div className="services-container managed-it-grid">
    {/* Left Column: Image */}
    <div className="managed-it-image">
      <img src={ManagedItImage} alt="Managed IT Support" />
    </div>

    {/* Right Column: Content */}
    <div className="managed-it-content">
      <p className="managed-it-subtitle">We Also Do</p>
      <h2 className="managed-it-title">3. Your Managed IT Partner for Reliable Operations</h2>
      <p className="managed-it-description">
        We serve as your outsourced IT department — providing 24/7 monitoring, rapid support, and ongoing optimization so you can focus on what matters most.
      </p>

      <div className="managed-it-highlights">
        <div className="highlight-card">
          <FaServer className="highlight-icon" />
          <div>
            <h3>Proactive Infrastructure Management</h3>
            <p>Real-time server, network, and cloud system monitoring to prevent issues before they disrupt business.</p>
          </div>
        </div>
        <div className="highlight-card">
          <FaUsers className="highlight-icon" />
          <div>
            <h3>End-User & Security Support</h3>
            <p>Direct help for employees, plus cyber response and patching from our Operations Centre.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<section id="tech-sourcing" className="tech-sourcing-section">
  <div className="services-container tech-sourcing-grid">

        {/* Right: Image */}
    <div className="tech-sourcing-image">
      <img src={TechSourcingImage} alt="Technology sourcing and project execution" />
    </div>
    {/* Left: Content */}
    <div className="tech-sourcing-content">
      <p className="tech-sourcing-subtitle">Lastly We Also Do</p>
      <h2 className="tech-sourcing-title">4. Technology Sourcing & Project Execution</h2>
      <p className="tech-sourcing-description">
        We help you find, implement, and adopt the right technology — from start to finish.
        Our expert-led services ensure your rollouts are smooth, cost-effective, and fully adopted.
      </p>

      <div className="tech-sourcing-highlights">
        <div className="highlight-card">
          <FaNetworkWired className="highlight-icon" />
          <div>
            <h3>End-to-End Project Leadership</h3>
            <p>From networking to software, we lead projects that stay on budget, on time, and fully aligned with goals.</p>
          </div>
        </div>
        <div className="highlight-card">
          <FaTools className="highlight-icon" />
          <div>
            <h3>Resource & Solution Sourcing</h3>
            <p>We source reliable hardware, licenses, IT experts, and creative teams for seamless execution.</p>
          </div>
        </div>
        <div className="highlight-card">
          <FaPuzzlePiece className="highlight-icon" />
          <div>
            <h3>Solution Integration</h3>
            <p>We connect new systems to your existing infrastructure, unifying data and eliminating silos.</p>
          </div>
        </div>
        <div className="highlight-card">
          <FaUserGraduate className="highlight-icon" />
          <div>
            <h3>Adoption Enablement</h3>
            <p>We train your team, manage change, and measure ROI to ensure successful uptake of new tech.</p>
          </div>
        </div>
      </div>
    </div>


  </div>

  {/* Framework Section */}
  <div className="tech-sourcing-framework">
    <h3>Service Delivery Framework</h3>
    <div className="framework-steps">
      <div className="framework-step">
        <span className="step-icon">🔍</span>
        <p><strong>Discover</strong><br />Deep-dive business /tech assessment</p>
      </div>
      <div className="framework-step">
        <span className="step-icon">🧱</span>
        <p><strong>Architect</strong><br />Solution design & partner selection</p>
      </div>
      <div className="framework-step">
        <span className="step-icon">⚙️</span>
        <p><strong>Execute</strong><br />Agile implementation with tracking</p>
      </div>
      <div className="framework-step">
        <span className="step-icon">📈</span>
        <p><strong>Optimize</strong><br />Continuous improvement & audits</p>
      </div>
    </div>
  </div>
</section>



<section className="success-path-section">
  <div className="services-container">
    <h2 className="success-title">The IT Consult Success Path</h2>
    <p className="success-intro">
      Every engagement follows a clear and proven process designed to maximize results and minimize risk.
    </p>

    <div className="success-steps">
      <div className="success-step">
        <h4>Initial Engagement</h4>
        <p>We begin with a deep conversation to understand your goals, challenges, and current tech posture.</p>
      </div>

      <div className="success-step">
        <h4>Planning</h4>
        <p>We map out a strategic tech roadmap with timelines, KPIs, and transformation priorities.</p>
      </div>

      <div className="success-step">
        <h4>Solution Sourcing</h4>
        <p>We help you procure the right tools, software, and people from vetted vendors and platforms.</p>
      </div>

      <div className="success-step">
        <h4>Implementation & Training</h4>
        <p>From deployment to hands-on training — we ensure everything runs smoothly and is well adopted.</p>
      </div>

      <div className="success-step">
        <h4>Ongoing Support & Optimization</h4>
        <p>We stay with you long-term — measuring, improving, and supporting your systems for resilience and growth.</p>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default Services;
