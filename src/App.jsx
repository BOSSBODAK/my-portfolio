import React from 'react';
import './styles.css'; 
import Navbar from './components/Navbar'; 
import ScatteredPiecesBackground from './components/ScatteredPiecesBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skills';
import Project from './components/Projects';
import Contacts from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <ScatteredPiecesBackground />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contacts />
    </div>
  );
};

export default App;
