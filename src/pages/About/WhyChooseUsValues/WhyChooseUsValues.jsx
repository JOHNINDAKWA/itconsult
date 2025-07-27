import React from 'react';
import './WhyChooseUsValues.css'; // Import specific styles

// Import React Icons
import {
  FaHandshake, FaUsers, FaAward, FaTasks, // For Why Choose Us
  FaUserTie, FaEye, FaLightbulb, FaShieldAlt, FaHandsHelping // For Our Values
} from 'react-icons/fa';

const WhyChooseUsValues = () => {
  const whyChooseUsItems = [
    {
      icon: <FaHandshake />,
      title: "Consultative Approach",
      description: "We listen first, act second. Our strategies are built on a deep understanding of your unique challenges and aspirations."
    },
    {
      icon: <FaUsers />,
      title: "Trusted Partnerships",
      description: "We connect you with top-tier vendors and cutting-edge tools, ensuring you leverage the best technology available."
    },
    {
      icon: <FaAward />,
      title: "Proven Expertise",
      description: "Benefit from decades of hands-on IT experience combined with strategic oversight, delivering reliable results."
    },
    {
      icon: <FaTasks />,
      title: "End-to-End Delivery",
      description: "From initial strategy and roadmap development to seamless implementation and ongoing support, we're with you every step."
    }
  ];

  const ourValuesItems = [
    {
      icon: <FaUserTie />,
      title: "Client-Centric",
      description: "Your business goals and success are at the core of every strategy we develop."
    },
    {
      icon: <FaEye />,
      title: "Transparent",
      description: "We maintain clear, open, and honest communication at every stage of our partnership."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative",
      description: "We provide forward-thinking solutions rooted in emerging technologies and creative problem-solving."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure",
      description: "Cybersecurity and compliance are not just features; they are the fundamental foundation of our services."
    },
    {
      icon: <FaHandsHelping />,
      title: "Collaborative",
      description: "We believe in working together; your success is truly our success."
    }
  ];

  return (
    <section className="why-choose-us-values-section">
      <div className="container">
        {/* Why Choose Us? Section */}
        <div className="section-header text-center">
          <p className="section-subtitle">Our Advantage</p>
          <h2 className="section-title">Why Choose IT Consult?</h2>
        </div>
        <div className="why-choose-us-grid">
          {whyChooseUsItems.map((item, index) => (
            <div key={index} className="choose-us-card">
              <div className="card-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Our Values Section */}
        <div className="section-header text-center values-header">
          <p className="section-subtitle">Our Core Principles</p>
          <h2 className="section-title">Our Values</h2>
        </div>
        <div className="our-values-grid">
          {ourValuesItems.map((item, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{item.icon}</div>
              <h3 className="value-title">{item.title}</h3>
              <p className="value-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsValues;
