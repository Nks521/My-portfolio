import React from 'react';
import './Hero.css';
import Lottie from 'lottie-react';
import animationData from '../assests/dev-animation.json';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>Hello, I'm <span>Naveen Kumar Singh</span></h1>
          <h2>Frontend Developer & Problem Solver</h2>
          <p>I build responsive and engaging web applications with React.</p>
          <a href="#projects" className="cta-btn">View My Work</a>
        </div>
        <div className="hero-animation">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
