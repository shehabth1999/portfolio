import React from 'react';
import {  Button } from 'react-bootstrap';
import './HeroStyle.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="hero-heading">Shehab Tharwat</h1>
      <p className="hero-paragraph">
        Junior Full Stack Developer
      </p>
      <p>
        <Button className="hero-button">Learn more</Button>
      </p>
    </div>
  );
}

export default HeroSection;
