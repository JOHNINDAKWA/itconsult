// src/components/CookieConsent.jsx
import React, { useState, useEffect } from 'react';
import './CookiesConsent.css';

const CookiesConsent = () => {
  // State to manage the visibility of the banner
  const [isVisible, setIsVisible] = useState(false);

  // Check for consent status in localStorage on component mount
  useEffect(() => {
    // Check if the user has already given their consent
    const consentStatus = localStorage.getItem('cookieConsent');
    if (consentStatus === 'accepted') {
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
    localStorage.setItem('cookieConsent', 'accepted');
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
    <div className="cookie-consent-container">
      <div className="cookie-consent-content">
        <p className="cookie-consent-text">
          We use cookies to ensure you get the best experience on our website. By using our website, you agree to our <a href="/privacy-policy" className="text-teal-400 hover:underline">Privacy Policy</a>.
        </p>
        <div className="cookie-consent-actions">
          <button onClick={handleAccept} className="cookie-consent-btn accept-btn">
            Accept
          </button>
          <button onClick={handleDecline} className="cookie-consent-btn decline-btn">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesConsent;
