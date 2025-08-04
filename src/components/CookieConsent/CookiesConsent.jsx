// src/components/CookieConsent.jsx
import React, { useState, useEffect } from "react";
import "./CookiesConsent.css";
import LegalModal from "../LegalModal/LegalModal";

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

const CookiesConsent = () => {
  // State to manage the visibility of the banner
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: [] });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Check for consent status in localStorage on component mount
  useEffect(() => {
    // Check if the user has already given their consent
    const consentStatus = localStorage.getItem("cookieConsent");
    if (consentStatus === "accepted") {
      // If accepted, do nothing, the banner remains hidden
      setIsVisible(false);
    } else {
      // If not yet accepted, show the banner
      setIsVisible(true);
    }
  }, []);

  // Handler for accepting cookies
  const handleAccept = () => {
    // Set consent status in localStorage
    localStorage.setItem("cookieConsent", "accepted");
    // Hide the banner
    setIsVisible(false);
  };

  // Handler for declining cookies
  const handleDecline = () => {
    // Optionally, you could set a 'declined' status or simply hide the banner
    // For this example, we'll just hide it but not set a permanent 'accepted' status
    setIsVisible(false);
  };

  // Do not render the component if it's not visible
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="cookie-consent-container">
        <div className="cookie-consent-content">
          <p className="cookie-consent-text">
            We use cookies to ensure you get the best experience on our website.
            By using our website, you agree to our{" "}
            <a
              onClick={() => openModal("Privacy Policy", PrivacyPolicyText)}
              className="text-teal-400 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
          <div className="cookie-consent-actions">
            <button
              onClick={handleAccept}
              className="cookie-consent-btn accept-btn"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="cookie-consent-btn decline-btn"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
      <LegalModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        content={modalContent.content}
      />
    </>
  );
};

export default CookiesConsent;
