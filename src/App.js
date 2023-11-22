import React, { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import BioSection from './components/BioSection/BioSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import EducationSection from './components/EducationSection/EducationSection';
import ContactSection from './components/ContactSection/ContactSection';
import { Pdf } from './Context/Skills';



function App() {
  const [pdf , setPdf]= useState()
  return (
    <div className="App">
      <Pdf.Provider value={{ pdf, setPdf }} >
      <HeroSection />
      <BioSection/>
      <SkillsSection/>
      <EducationSection/>
      <ContactSection/>
      </Pdf.Provider>
    </div>
  );
}

export default App;
