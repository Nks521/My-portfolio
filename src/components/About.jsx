import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I'm Naveen Kumar Singh, a passionate and energetic second-year B.Tech Computer Science student at Sharda University, with a strong foundation in core engineering principles and a growing command of modern technologies.
        </p>
        <p>
          I have hands-on experience building real-world projects like a Spotify clone, Sentiment Analysis with Twitter data, and a Weather Forecasting app using APIs. I enjoy creating impactful digital experiences and am currently exploring the intersection of frontend development and machine learning.
        </p>
        <p>
          I bring a proactive attitude, strong communication skills, and leadership experience, having volunteered in university events and participated in marathons and cycling competitions. Whether it’s coding, painting, or running, I give my best with consistency and dedication.
        </p>

        <h3>Technical Skills</h3>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>MySQL</li>
        </ul>

        <h3>Certifications & Achievements</h3>
        <ul className="skills-list">
          <li>Oracle Java Certified</li>
          <li>AWS Cloud Certified</li>
          <li>Microsoft Office & Excel Skilled</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
