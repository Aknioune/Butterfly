import React, { useState } from 'react';
import './ProjectDescription.css';
import BetterflyLogo from "../images/Main logo/1.png";
import children1 from "../images/Cancer/pic1.png";
import children2 from "../images/Cancer/pic2.png";
import children3 from "../images/Cancer/pic3.png";
import CE from "../images/Partners/CE quadri.png";
import ENCO from "../images/Partners/EN co fundedvertical.png";
import onkosev from "../images/Partners/Onkosev.jpeg";
import ESC from "../images/Partners/european solidarity corps.png";
import Amigos from "../images/Partners/Amigos de Europa.jpeg";
import IAFA from "../images/Partners/Logo-IAFA-03.png";
import MFFSD from "../images/Partners/MFFSD.png";
import stella from "../images/Partners/stella.png";
import { FaUsers, FaFileAlt, FaCogs } from 'react-icons/fa';

function ProjectDescription() {
  const [showFullText, setShowFullText] = useState(false);

  const fullText = `"A Butterfly's Lifespan is not Just One Day" is a high-priority volunteer project with the number 101126460 which will last 36 months, funded by the European Solidarity Corps program and which focuses on the global cancer crisis. With 10 million deaths in 2020 and projections indicating 27 million new cases annually by 2040, this initiative focuses on key risk factors such as excessive alcohol consumption, obesity, and poor diet. By raising awareness and promoting preventive measures, the project aims to reduce the incidence of cancer and improve the quality of life for those affected by the disease.`;

  const shortText = fullText.slice(0, 200) + '...';

  return (
    <div className="project-description-container">
      <div className="project-description">
        <div className="hero-section section">
          <div className="hero-content">
            <h1>A Butterfly's Lifespan is not Just One Day</h1>
            <p>
              {showFullText ? fullText : shortText}
            </p>
            <button className="show-more-btn" onClick={() => setShowFullText(!showFullText)}>
              {showFullText ? 'Show Less' : 'Show More'}
            </button>
          </div>
          <div className="logo-section">
            <img src={BetterflyLogo} alt="Butterfly's Lifespan" className="heart-logo" />
          </div>
        </div>

        <div className="image-gallery section">
          <div className="gallery-item square-image">
            <img src={children1} alt="Child with teddy bear" />
          </div>
          <div className="gallery-item rectangle-image">
            <img src={children2} alt="Child in hospital" />
          </div>
          <div className="gallery-item square-image">
            <img src={children3} alt="Child with headscarf" />
          </div>
        </div>

        <div className="programs section">
          <h2>Voluntary Activities</h2>
          <div className="program-cards">
            <div className="program-card">
              <FaUsers className="program-icon" />
              <h3>Team Marketing</h3>
              <p>Details about Team Marketing</p>
              <a href="/voluntary-activities" className="read-more">Read More</a>
            </div>
            <div className="program-card">
              <FaFileAlt className="program-icon" />
              <h3>Team Content</h3>
              <p>Details about Team Content</p>
              <a href="/voluntary-activities" className="read-more">Read More</a>
            </div>
            <div className="program-card">
              <FaCogs className="program-icon" />
              <h3>Team Operation</h3>
              <p>Details about Team Operation</p>
              <a href="/voluntary-activities" className="read-more">Read More</a>
            </div>
          </div>
        </div>

        <div className="partners">
          <h2>Our Partners</h2>
          <div className="partner-logos">
            <img src={ESC} alt="European Solidarity Corps" />
            <img src={ENCO} alt="Co-funded by the European Union" />
            <img src={onkosev} alt="ONKO-SEV" />
            <img src={CE} alt="European Commission" />
            <img src={Amigos} alt="Amigos de Europa" />
            <img src={IAFA} alt="IAFA" />
            <img src={MFFSD} alt="MFFSD" />
            <img src={stella} alt="Stella" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDescription;
