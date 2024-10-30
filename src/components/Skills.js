import React, { useEffect, useState } from 'react';
import ScatteredPiecesBackground from './ScatteredPiecesBackground'; // Import background effect component
import '../styles.css'; // Assuming the CSS is saved in the same folder

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  const skills = [
    { name: 'Figma', percentage: 60 },
    { name: 'UI/UX Design', percentage: 55 },
    { name: 'Java', percentage: 30 },
    { name: 'Cisco Networking', percentage: 20 },
  ];

  // Trigger animation on component mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="Skills" className="skills-section">
      <ScatteredPiecesBackground />
      <div className="skills-content">
        <h2 className="skills-title">MY SKILLS</h2>
        <p className="skills-description">
          Here are some of my skills that demonstrate my expertise in web development, design, and technology:
        </p>
        <ul className="skills-list">
          <li>Skilled in Figma and UI/UX design, ensuring intuitive and aesthetically pleasing user experiences.</li>
          <li>Competent in Java for software development and back-end solutions.</li>
          <li>Knowledgeable in Cisco Packet Tracer for network simulation and design.</li>
        </ul>
        <div className="progress-bars">
          {skills.map((skill, index) => (
            <div key={index} className="progress-bar">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar-background">
                <div
                  className={`progress-bar-fill ${animate ? 'animate' : ''}`}
                  style={{
                    width: `${skill.percentage}%`,
                    transitionDelay: `${index * 0.2}s`,
                  }}
                >
                  <span className="percentage-text">{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
