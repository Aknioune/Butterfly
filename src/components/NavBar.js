import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import BetterflyLogo from "../images/Main logo/1.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={BetterflyLogo} alt="Butterfly" />
        </NavLink>
      </div>
      <ul className="navbar-menu">
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/voluntary-activities" activeClassName="active">Voluntary Activities</NavLink></li>
        <li><NavLink to="/partners" activeClassName="active">Partners</NavLink></li>
        <li><NavLink to="/blog" activeClassName="active" className="blog-button">Blog</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
