import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email or social links below.</p>
        <a href="2022005748.naveen@ug.sharda.ac.in" className="email-link">2022005748.naveen@ug.sharda.ac.in</a>
        <div className="social-links">
          <a href="https://github.com/Nks521" target="_blank">GitHub</a>
          <a href="www.linkedin.com/in/naveen-kumar-singh-9a6459290" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
