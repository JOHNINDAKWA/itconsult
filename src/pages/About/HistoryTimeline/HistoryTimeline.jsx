import React from 'react';
import './HistoryTimeline.css'; // Import specific styles

// Import images for the timeline
import historyImg1 from '../../../assets/history-img-1.jpg';
import historyImg2 from '../../../assets/history-img-2.jpg'; 
import historyImg3 from '../../../assets/history-img-4.jpg';

const HistoryTimeline = () => {
  return (
    <section className="history-timeline-section">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-subtitle">Our Journey</p>
          <h2 className="section-title">IT Consult's Evolution</h2>
        </div>

        <div className="timeline-container">
          {/* Central vertical line is handled by CSS ::after on timeline-container */}

          {/* Timeline Item 1: Our History (Content Left, Image Right) */}
          <div className="timeline-item">
            <div className="timeline-left-col">
              <div className="timeline-content">
                <h3 className="timeline-title">Our History</h3>
                <p className="timeline-description">
                  Founded to simplify IT for growing businesses, IT Consult began as a Managed Service Provider (MSP).
                  We offered hands-on support, infrastructure management, and cybersecurity solutions tailored to their immediate needs.
                </p>
              </div>
            </div>
            <div className="timeline-marker"></div> {/* Marker is now a standalone element in the middle of the item */}
            <div className="timeline-right-col">
              <div className="timeline-image-wrapper">
                <img src={historyImg1} alt="Our History" className="timeline-image" />
              </div>
            </div>
          </div>

          {/* Timeline Item 2: Our Present (Image Left, Content Right) */}
          <div className="timeline-item timeline-item2">
            <div className="timeline-left-col">
              <div className="timeline-image-wrapper">
                <img src={historyImg2} alt="Our Present" className="timeline-image" />
              </div>
            </div>
            <div className="timeline-marker"></div> {/* Marker is now a standalone element in the middle of the item */}
            <div className="timeline-right-col">
              <div className="timeline-content">
                <h3 className="timeline-title">Our Present</h3>
                <p className="timeline-description">
                  Over time, we realized the increasing need for strategic guidance beyond basic support.
                  In 2024, we rebranded to become a full-fledged IT consultancy, now focusing on IT strategy,
                  digital transformation, compliance, vendor management, and robust managed services.
                  We're trusted advisors, not just providers.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 3: Our Future (Content Left, Image Right) */}
          <div className="timeline-item">
            <div className="timeline-left-col">
              <div className="timeline-content">
                <h3 className="timeline-title">Our Future</h3>
                <p className="timeline-description">
                  We aim to lead African enterprises into the digital era with secure, efficient, and innovative IT ecosystems.
                  Our goal is to unlock long-term value through cutting-edge solutions, expert execution, and strong partnerships,
                  shaping the technological landscape of tomorrow.
                </p>
              </div>
            </div>
            <div className="timeline-marker"></div> {/* Marker is now a standalone element in the middle of the item */}
            <div className="timeline-right-col">
              <div className="timeline-image-wrapper">
                <img src={historyImg3} alt="Our Future" className="timeline-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
