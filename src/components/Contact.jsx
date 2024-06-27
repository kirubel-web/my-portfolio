import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faGithub, faLinkedin, faXTwitter,faMedium,faDev } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons/faEnvelopeCircleCheck';






const Contact = () => {
  return (
    <div className="main-content">
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-icons">
        <a href="https://www.instagram.com/code_japi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
        </a>
        <a href="https://t.me/code_japi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} className="icon telegram" />
        </a>
        <a href="https://github.com/kirubel-web" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon github" />
        </a>
        <a href="https://www.linkedin.com/in/kirubel-alemu--" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
        </a>
        <a href="https://x.com/code_japi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} className="icon linkedin" />
        </a>
        <a href="https://code-japi.medium.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} className="icon medium" />
        </a>
        <a href="https://www.dev.to/code_japi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDev} className="icon linkedin" />
        </a>
      </div>
      <div>
        <p>Do You Prefer Email Instead:</p>
        <div className="contact-icons">
        <a href="mailto:kirubelalemu119@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="icon email" />
        </a>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
