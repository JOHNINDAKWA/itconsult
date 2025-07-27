import React from 'react';
import './About.css'; // Import About page specific styles
import aboutHeroBg from '../../assets/about-hero-bg.jpg'; // Import the background image
import HistoryTimeline from './HistoryTimeline/HistoryTimeline';
import WhyChooseUsValues from './WhyChooseUsValues/WhyChooseUsValues';

const About = () => {
  return (
    <>
    <section className="about-hero-section">
      <div className="about-hero-grid">
        {/* Left Side: Background Image */}
        <div className="about-hero-image-container">
          <img src={aboutHeroBg} alt="IT Consult Team Working" className="about-hero-image" />
          <div className="about-hero-image-overlay"></div> {/* Optional overlay for image */}
        </div>

        {/* Right Side: Our Story Content */}
        <div className="about-hero-content">
          <p className="about-hero-subtitle">About Us</p>
          <h1 className="about-hero-title">Our Story: Bridging Strategy and Execution</h1>
          <p className="about-hero-description">
            IT Consult began as a Managed Service Provider (MSP) and has evolved into a comprehensive IT consultancy.
            We bridge the gap between strategy and execution, partnering with clients to implement meaningful tech transformations
            that drive efficiency, foster innovation, and secure their digital future. 
          </p>

          <p className='about-hero-descriptio'>Our journey has been defined by a commitment
            to understanding the unique challenges of businesses in Nairobi and beyond, delivering bespoke solutions that truly
            make a difference. We believe in getting hands-on, ensuring every strategy is not just advised, but effectively
            implemented to achieve tangible results.</p>
          <a href="#contact" className="btn btn-primary btn-gold">Schedule Your Briefing</a>
        </div>
      </div>
    </section>

    <HistoryTimeline/>
    <WhyChooseUsValues/>
    </>
  );
};

export default About;
