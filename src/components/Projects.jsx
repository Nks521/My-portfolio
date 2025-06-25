import React, { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Jobify',
    shortDesc: 'A job tracking web app built with MERN stack.',
    fullDesc:
      'Jobify allows users to track job applications, status, and interviews using the MERN stack. It includes login/signup, job filters, sector categorization, and a beautiful dashboard UI.',
  },
  {
    title: 'BookNest',
    shortDesc: 'Online book store using React and MySQL.',
    fullDesc:
      'BookNest is a full-stack book selling app using React frontend and MySQL backend. Features include adding books, image uploads, book genres, and delete/edit functionalities.',
  },
  {
    title: 'Fire Detection Bot',
    shortDesc: 'AI-enabled firefighting robot with sensor integration.',
    fullDesc:
      'This bot detects fire using sensors and alerts the user via a Bluetooth-connected app. It is integrated with a website and machine learning model for detection logic.',
  },
  {
    title: 'Spotify Clone',
    shortDesc: 'A clone of Spotify with working music UI.',
    fullDesc:
      'A frontend-only clone that mimics Spotify layout, navigation, and audio play using JavaScript and HTML/CSS. Contains some working songs with styling.',
  },
  {
    title: 'Weather App',
    shortDesc: 'Real-time weather info using OpenWeather API.',
    fullDesc:
      'This project fetches and displays live weather data using an API. It shows temperature, wind speed, and location weather in real-time.',
  },
  {
    title: 'Sentiment Analysis',
    shortDesc: 'ML-based tweet sentiment classifier.',
    fullDesc:
      'A machine learning model trained on Twitter dataset to classify sentiment as positive, neutral, or negative. Built using Python and visualized using graphs.',
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleExpand = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projectData.map((project, index) => (
            <div
              className={`project-card ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleExpand(index)}
            >
              <h3>{project.title}</h3>
              <p>{activeIndex === index ? project.fullDesc : project.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
