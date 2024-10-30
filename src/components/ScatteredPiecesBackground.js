// ScatteredPiecesBackground.js
import React, { useState } from 'react';
import '../styles.css';

const ScatteredPiecesBackground = () => {
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseInside(true); 
  };

  const handleMouseLeave = () => {
    isMouseInside(false);
  };

  const getRandomValue = (min, max) => Math.random() * (max - min) + min;

  return (
    <div
      className="scattered-pieces-background"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: 30 }).map((_, index) => {
        const randomSize = getRandomValue(5, 20); 
        const randomPositionX = getRandomValue(0, window.innerWidth);
        const randomPositionY = getRandomValue(0, window.innerHeight);
        const randomDelay = getRandomValue(0, 5); 

        return (
          <div
            key={index}
            className="piece"
            style={{
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              top: `${randomPositionY}px`,
              left: `${randomPositionX}px`,
              animationDelay: `${randomDelay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default ScatteredPiecesBackground;
