import React, { useEffect, useState } from 'react';
import ScatteredPiecesBackground from './ScatteredPiecesBackground';
import '../styles.css';

const images = [
  require('../assets/pic1.jpg'),
  require('../assets/pic2.jpg'),
  require('../assets/pic3.jpg'),
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); 
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true); 
      }, 500); 
    }, 2500); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const textSection = document.querySelector('.text-box');
      const rect = textSection.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      setIsInView(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about-me" className="about">
      <ScatteredPiecesBackground />
      <div className="about-container">
        <div className="image-section">
          <div className="profile-image-container">
            <img
              src={images[currentImageIndex]}
              alt={`Profile ${currentImageIndex + 1}`}
              className={`profile-image ${fadeIn ? 'fade-in' : 'fade-out'}`}
            />
          </div>
        </div>

        <div className={`text-box ${isInView ? 'color-reading' : ''}`}>
          <h1>ABOUT ME</h1>
          <h2>BSIT Student</h2>
          <p className="color-text">
            Hello everyone, my name is Russell Roi Llantero, a BSIT student at the Western Institute of Technology.
            I'm a dedicated web designer and developer skilled in HTML, CSS, JavaScript, and Java, with expertise 
            in Cisco networking. Additionally, I have a strong background in Figma and UI/UX design, ensuring both 
            technical and visual excellence in my projects.
          </p>           
        </div>
      </div>
    </section>
  );
};

export default About;
