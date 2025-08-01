import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footerBg from "../../assets/footer-bg.jpeg";
import itConsultLogo from "../../assets/itconsult-logo-green-scaled.png";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import LegalModal from "../../components/LegalModal/LegalModal";

const DisclaimerText = [
  "Introduction...",

  "This Disclaimer applies to the website accessible at https://itconsult.africa. It should be read together with our Terms of Use and Privacy Policy for a complete understanding of your rights and obligations when using this site. The full legal identity of the company operating this website is outlined in the Privacy Policy.",
  "1.1 General Disclaimer",
  "The content available on this website is for general informational purposes only. We make reasonable efforts to ensure the accuracy and relevance of the information presented, but do not guarantee its completeness, reliability, or currency. No content on this site should be construed as legal, financial, or professional advice. For specific concerns, users are encouraged to consult directly with our team or other qualified professionals.",
  "1.2 No Client Relationship",
  "Merely accessing or using this website does not establish a client-consultant relationship. Formal engagements are established only through signed contractual agreements that define the scope of work, fees, and deliverables.",
  "1.3 Third-Party Links",
  "This website may contain links to third-party websites, which are provided solely for convenience. These external sites are not controlled or endorsed by us. We do not assume responsibility for the content, security, or data practices of these third parties, and users access them at their own risk.",
  "1.4 Limitation of Liability",
  "We will not be liable for any loss or damage, including indirect or consequential loss or damage, arising from the use of this website or reliance on its contents. This includes, but is not limited to, loss of data, income, profit, or business interruption. We disclaim liability to the fullest extent permitted under Kenyan law, including the Law of Torts and the Consumer Protection Act, 2012.",
  "1.5 Website Availability",
  "While we strive to maintain the uptime and functionality of our website, we do not warrant that access to the site will be uninterrupted, error-free, or free from malware. Maintenance, updates, and outages may occur without prior notice.",
  "1.6 Governing Law",
  "This Disclaimer is governed by the laws of the Republic of Kenya, and any disputes shall be resolved in accordance with the Kenyan legal system, subject to the jurisdiction of Kenyan courts.",
  "1.7 Changes to the Disclaimer",
  "We reserve the right to modify this Disclaimer at any time without notice. Users are encouraged to review it regularly. Continued use of the website indicates acceptance of the current version.",
];

const TermsOfUseText = [
  "Introduction...",
  "These Terms of Use govern your interaction with the website accessible at https://itconsult.africa. Please read these Terms in conjunction with our Disclaimer and Privacy Policy. The Privacy Policy contains the full legal identity of the organization responsible for this website.",
  "2.1 Acceptance of Terms",
  "By accessing or using this website, you accept and agree to be legally bound by these Terms. If you do not agree, please refrain from using the site.",
  "2.2 Permitted Use",
  "Users agree to:",
  "• Use the site only for lawful purposes;",
  "• Not reproduce, duplicate, or exploit any portion of the site content without prior written permission;",
  "• Avoid actions that could compromise the site's integrity, including introducing malware, attempting unauthorized access, or conducting automated data scraping;",
  "• Respect the intellectual property rights of the company and third parties.",
  "2.3 Intellectual Property",
  "All materials on this website, including but not limited to text, images, logos, videos, software, and code, are the intellectual property of the company or its content suppliers. These are protected under the Kenya Copyright Act, 2001 and international IP conventions. Unauthorized use may result in civil or criminal liability.",
  "2.4 Service Descriptions",
  "Descriptions of services, such as IT consultancy, strategy, managed services, cybersecurity, and hardware maintenance, are indicative. Actual service terms are subject to specific agreements and contracts.",
  "2.5 Data and Privacy",
  "Use of this site is subject to our Privacy Policy, which details how we collect, process, store, and protect user data in accordance with the Data Protection Act, 2019. Users should refer to the Privacy Policy for a comprehensive understanding of their rights and our obligations.",
  "2.6 Termination",
  "We reserve the right to terminate or suspend access to the website at our discretion, particularly in cases of suspected misuse, violation of these Terms, or harmful conduct.",
  "2.7 Governing Law",
  "These Terms are governed by the laws of Kenya. Disputes arising from their interpretation or enforcement shall be subject to Kenyan courts.",
  "2.8 Changes to Terms",
  "We reserve the right to modify these Terms at any time. Changes will be posted on this page and will take effect immediately. Your continued use of the site signifies agreement to the updated Terms.",
];

const PrivacyPolicyText = [
  "Introduction...",
  "This Privacy Policy explains how ITCONSULT LIMITED, trading as IT CONSULT, collects, uses, discloses, and protects your personal data. We operate under the provisions of the Kenyan Data Protection Act, 2019, and adhere to global best practices including GDPR principles for transparency, accountability, and data minimization. This document also defines the legal entity behind the website and should be read together with the Disclaimer and Terms of Use.",
  "3.1 Personal Data We Collect",
  "We collect and process the following types of personal data:",
  "• Identification Data: Name, email, phone number, company affiliation;",
  "• Technical Data: IP addresses, browser types, access times, and referring URLs;",
  "• Communication Data: Feedback, messages, enquiries submitted via forms;",
  "• Service-Related Data: Billing details, contract terms, service preferences (where applicable).",
  "3.2 How We Use Your Data",
  "We use personal data to:",
  "• Respond to your enquiries and service requests;",
  "• Deliver contracted services;",
  "• Improve website functionality and user experience;",
  "• Send newsletters and marketing updates with your consent;",
  "• Comply with legal obligations (e.g., tax, regulatory audits).",
  "3.3 Lawful Basis for Processing",
  "Data is processed based on:",
  "• Consent (e.g., newsletter signup);",
  "• Contractual Necessity (e.g., service delivery);",
  "• Legal Compliance;",
  "• Legitimate Interest (e.g., internal analytics).",
  "3.4 Data Sharing and Disclosure",
  "We may share your data with:",
  "• Our employees and contractors for service fulfilment;",
  "• Third-party service providers (e.g., email marketing platforms, cloud storage);",
  "• Government or law enforcement agencies if required by law or court order.",
  "All third-party data processors are contractually bound to uphold confidentiality and use data only as instructed.",
  "3.5 International Data Transfers",
  "Some of our third-party providers are located outside Kenya. Where data is transferred abroad, we ensure appropriate safeguards are in place (e.g., model contractual clauses or binding corporate rules).",
  "3.6 Data Retention",
  "We retain your data only as long as necessary for the purposes stated or as required by applicable laws (e.g., the Income Tax Act).",
  "3.7 Your Rights Under Kenyan Law",
  "You have the right to:",
  "• Access personal data we hold about you;",
  "• Request correction of inaccurate or outdated data;",
  "• Request deletion where processing is no longer necessary;",
  "• Withdraw consent where applicable;",
  "• Object to processing or file a complaint with the Office of the Data Protection Commissioner (ODPC).",
  "Requests can be made by emailing info@itconsult.africa",
  "3.8 Cookies and Tracking",
  "Our website uses cookies to:",
  "• Recognize returning visitors;",
  "• Analyze site usage and performance;",
  "• Store preferences for future visits.",
  "Users can control cookie preferences through browser settings.",
  "3.9 Data Security",
  "We implement industry-standard security measures including firewalls, encryption, and access controls in line with ISO/IEC 27001. While we take reasonable precautions, no digital system is completely secure.",
  "3.10 Updates to This Policy",
  "We may revise this policy periodically. The most recent version will always be available on our website. Continued use of our services signifies acceptance of any changes.",
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: [] });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <footer
        className="footer-section"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="footer-overlay"></div>
        <div className="container footer-content-grid">
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <Link to="/">
                <img
                  src={itConsultLogo}
                  alt="IT Consult Logo"
                  className="footer-logo-img"
                />
              </Link>
            </div>
            <p className="footer-description">
              We are a Nairobi-based IT consultancy firm dedicated to helping
              businesses revolutionize their operations through modern,
              strategic, and results-driven technology solutions.
            </p>
          </div>

          <div className="footer-col footer-links">
            <h4 className="footer-col-title">Company</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {/* Updated links to open the modal */}
              <li>
                <a
                  onClick={() =>
                    openModal("Website Disclaimer", DisclaimerText)
                  }
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a onClick={() => openModal("Terms Of Use", TermsOfUseText)}>
                  Terms Of Use
                </a>
              </li>

              <li>
                <a
                  onClick={() => openModal("Privacy Policy", PrivacyPolicyText)}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-links">
            <h4 className="footer-col-title">Services</h4>
            <ul>
              <li>
                <Link to="/services/it-advisory">IT Advisory & Consulting</Link>
              </li>
              <li>
                <Link to="/services/grc">Governance, Risk & Compliance</Link>
              </li>
              <li>
                <Link to="/services/managed-it">Managed IT Services</Link>
              </li>
              <li>
                <Link to="/services/tech-sourcing">Technology Sourcing</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-follow">
            <h4 className="footer-col-title">Follow Us</h4>
            <div className="footer-social-links">
              <a
                href="https://www.linkedin.com/company/itconsultafrica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
            <p className="footer-newsletter-text">
              Stay updated with our latest insights.
            </p>
            <Link
              to="/contact"
              className="btn btn-outline footer-newsletter-btn"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} IT Consult. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <LegalModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        content={modalContent.content}
      />
    </>
  );
};

export default Footer;
