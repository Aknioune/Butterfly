import React from 'react';
import './Partners.css';
import CE from "../images/Partners/CE quadri.png";
import ENCO from "../images/Partners/EN co fundedvertical.png";
import onkosev from "../images/Partners/Onkosev.jpeg";
import ESC from "../images/Partners/european solidarity corps.png";
import Amigos from "../images/Partners/Amigos de Europa.jpeg";
import IAFA from "../images/Partners/Logo-IAFA-03.png";
import MFFSD from "../images/Partners/MFFSD.png";
import stella from "../images/Partners/stella.png";

function Partners() {
  return (
    <div className="partners">
      <header className="partners-header">
        <h1>Our Partners</h1>
        <p>Meet the organizations that support and collaborate with us.</p>
      </header>
      
      <div className="partners-container">
        <div className="partner-card">
          <img src={ESC} alt="European Solidarity Corps" />
          <h3>European Solidarity Corps</h3>
          <p>Supporting young people in helping communities across Europe.</p>
          <a href="https://europa.eu/youth/solidarity" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>

        <div className="partner-card">
          <img src={CE} alt="Co-funded by the European Union" />
          <h3>European Union</h3>
          <p>Co-funded by the European Union for various developmental projects.</p>
          <a href="https://europa.eu/european-union" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>

        <div className="partner-card">
          <img src={onkosev} alt="ONKO-SEV" />
          <h3>ONKO-SEV</h3>
          <p>Dedicated to cancer research and support services.</p>
          <a href="https://onkosev.org" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>

        <div className="partner-card">
          <img src={ENCO} alt="ENCO" />
          <h3>ENCO</h3>
          <p>European Commission's funding for innovative projects.</p>
          <a href="https://ec.europa.eu" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>

        <div className="partner-card">
          <img src={Amigos} alt="Amigos de Europa" />
          <h3>Amigos de Europa</h3>
          <p>Promoting cultural exchange and solidarity across Europe.</p>
          <a href="https://amigosdeeuropa.org" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>

        <div className="partner-card">
          <img src={IAFA} alt="IAFA" />
          <h3>IAFA</h3>
          <p>Institute for the Advancement of Arts & Culture.</p>
          <a href="https://iafa.org" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>

        <div className="partner-card">
          <img src={MFFSD} alt="MFFSD" />
          <h3>MFFSD</h3>
          <p>Municipal Foundation for Sustainable Development.</p>
          <a href="https://mffsd.org" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>

        <div className="partner-card">
          <img src={stella} alt="Stella" />
          <h3>Stella</h3>
          <p>Supporting women empowerment and education globally.</p>
          <a href="https://stella.org" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
      </div>
    </div>
  );
}

export default Partners;
