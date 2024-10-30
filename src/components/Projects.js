import React, { useEffect, useState } from 'react';
import ScatteredPiecesBackground from './ScatteredPiecesBackground'; 
import proj1 from '../assets/proj1.jpg';
import proj6 from '../assets/proj2.png';
import proj4 from '../assets/proj3.png';
import proj5 from '../assets/proj4.jpg';
import '../styles.css'; 

const images = [
  { src: proj1, link: 'https://www.figma.com/design/88ASQGFJPg8epbsBP3xZYP/PORTFOLIO?node-id=2-5&node-type=frame&t=t9lMbFxjE6p1E3QA-0', title: 'FIGMA'  },
  { src: proj6, link: 'https://port-gold-chi.vercel.app/#projects', title: 'UI/UX DESIGN' },
  { src: proj4, link: 'https://www.figma.com/proto/AKKn0KuQbpEDYs8Ivegus5/Exam?node-id=1-2&starting-point-node-id=1%3A2', title: 'PROTOTYPE FIGMA' },
  { src: proj5, link: 'file:///C:/Users/Russell/Documents/russell/CARSHUB/CARS.html', title: 'WEB DESIGN' },
];

const Projects = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.querySelector('#projects');
      const rect = projectsSection.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      setIsInView(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className={`projects ${isInView ? 'color-reading' : ''}`}>
      <ScatteredPiecesBackground />
      <div className="services-intro">
        <h3>MY PROJECTS</h3>
        <p>
          I have worked on projects that highlight my skills in web design, 
          development, and graphic design.
        </p>
      </div>
      <div className="project-cards">
        {images.map((imageObj, index) => (
          <div className="card" key={index}>
            <a href={imageObj.link} target="_blank" rel="noopener noreferrer">
              <div className="card-image">
                <img src={imageObj.src} alt={`Project ${index + 1}`} />
              </div>
              <p className="card-title">{imageObj.title}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
