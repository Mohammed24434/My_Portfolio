import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onToggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">My Portfolio</div>
      <ul className="navbar__links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="navbar__toggle" onClick={onToggleDarkMode} aria-label="Toggle dark mode">
        {darkMode ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar; 