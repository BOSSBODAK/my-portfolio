import React, { useState } from 'react';
import '../styles.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault(); 

    const targetId = event.currentTarget.getAttribute('href'); 
    const targetSection = document.querySelector(targetId); 

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="responsive-bar">
        <h4 onClick={toggleMenu} className="menu-toggle">
          ☰
        </h4>
      </div>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><a href="#home" onClick={handleClick}>Home</a></li>
        <li><a href="#about-me" onClick={handleClick}>About</a></li>
        <li><a href="#Skills" onClick={handleClick}>Skills</a></li>
        <li><a href="#projects" onClick={handleClick}>Portfolio</a></li>
        <li><a href="#contact" onClick={handleClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
