
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const roleTypedRef = useRef(null);

  useEffect(() => {
    const roleOptions = {
      strings: [
        "UI/UX DESIGNER", 
        "WEB DESIGNER", 
        "FRONTEND DEVELOPER"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 2000,
      loop: true,
    };

    roleTypedRef.current = new Typed(".role-typed-element", roleOptions);

    return () => {
      roleTypedRef.current.destroy();
    };
  }, []);

  return (
    <section id="home">
      <div className="portfolio-container">
        <div className="background-text">PORTFOLIO</div>
        <div className="portfolio-content">
          <h1 className="main-title">WELCOME</h1>
          <p className="year">2024</p>
          <div className="role">
            <p className="name">RUSSELL ROI LLANTERO</p> 
            <p>
              <span className="role-typed-element"></span> 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
