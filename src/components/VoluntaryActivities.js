import React from 'react';
import { FaUsers, FaFileAlt, FaCogs } from 'react-icons/fa';
import './VoluntaryActivities.css';
import Marketing from "../images/Cancer/Marketing.jpg"; 
import Content from "../images/Cancer/Content.jpg"; 
import Operation from "../images/Cancer/operation.jpg"; 

function VoluntaryActivities() {
  return (
    <div className="voluntary-activities">
      <header className="voluntary-header">
        <h1>Our Voluntary Activities</h1>
        <p>Explore the different ways you can contribute and make a difference.</p>
      </header>

      <div className="team-details-container">
        {/* Team Marketing Section */}
        <section className="team-section reverse">
          <div className="team-image">
            <img src={Marketing} alt="Marketing team activities" />
          </div>
          <div className="team-description">
            <h2><FaUsers className="team-icon-inline" /> Team Marketing</h2>
            <p>The Marketing team focuses on creating and executing strategies to promote our mission and engage the community.</p>
            <ul className="activity-list">
              <li>Social Media Campaigns</li>
              <li>Community Outreach</li>
              <li>Email Marketing</li>
            </ul>
          </div>
        </section>

        {/* Team Content Section */}
        <section className="team-section">
          <div className="team-image">
            <img src={Content} alt="Content team activities" />
          </div>
          <div className="team-description">
            <h2><FaFileAlt className="team-icon-inline" /> Team Content</h2>
            <p>The Content team is responsible for creating compelling content that communicates our mission and values.</p>
            <ul className="activity-list">
              <li>Blog Writing</li>
              <li>Graphic Design</li>
              <li>Video Production</li>
            </ul>
          </div>
        </section>

        {/* Team Operation Section */}
        <section className="team-section reverse">
          <div className="team-image">
            <img src={Operation} alt="Operation team activities" />
          </div>
          <div className="team-description">
            <h2><FaCogs className="team-icon-inline" /> Team Operation</h2>
            <p>The Operations team manages the day-to-day operations, ensuring that everything runs smoothly.</p>
            <ul className="activity-list">
              <li>Project Management</li>
              <li>Event Coordination</li>
              <li>Administrative Support</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default VoluntaryActivities;
