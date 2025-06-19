import React, { useState } from 'react';
import './navbar.css';
import { FaPhone, FaHeart, FaSignOutAlt, FaUser, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="logo">StudyNerds</div>
      <nav className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <a href="#" className="nav-link">About us</a>
        <a href="#" className="nav-link">Blog</a>
        <a href="#" className="contact-btn">Contact us</a>
        <div className="right-section">
          <a href="tel:+1234567890" className="call-icon">
            <FaPhone /> +1-234-567-890
          </a>
          <a href="#" className="icon-link"><FaHeart /></a>
          <a href="#" className="icon-link"><FaSignOutAlt /></a>
          <a href="#" className="icon-link"><FaUser /></a>
        </div>
      </nav>
      <div className="toggle-btn" onClick={toggleNav}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;