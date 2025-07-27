import React from 'react';
import './Home.css'; // Import Home page specific styles
import backgroundHero from '../../assets/landing1.jpg'; // Re-use the same background image
import AboutSection from './AboutSection';
import ContactCtaSection from './ContactCtaSection/ContactCtaSection';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
    <section className="hero-section">
      <div className="hero-background" style={{ backgroundImage: `url(${backgroundHero})` }}>
        <div className="hero-overlay"></div> {/* Overlay for text readability */}
      </div>
      <div className="container hero-content">
        {/* Sub-headline/Tagline from client write-up */}
        <p className="hero-tagline">IT Consult – Simplifying Your Digital Journey</p>

        {/* Main Headline from client write-up */}
        <h1 className="hero-headline">Your Trusted IT Business Partner</h1>

        {/* Descriptive text from client write-up */}
        <p className="hero-description">
          We are a Nairobi-based IT consultancy firm dedicated to helping businesses revolutionize their operations through modern, strategic, and results-driven technology solutions.
        </p>

        <div className="hero-buttons">
          <Link to="/about" className="btn btn-primary">Learn More</Link>
          <Link to="/services" className="btn btn-outline">All Services</Link>
        </div>
      </div>
    </section>
      <AboutSection />
      <ContactCtaSection />

    </>
  );
};

export default Home;
