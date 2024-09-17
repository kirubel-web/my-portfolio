import React, { useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faGithub, faLinkedin, faXTwitter, faMedium, faDev } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons/faEnvelopeCircleCheck';
import { gsap } from 'gsap';

const Contact = () => {

  useEffect(() => {
    // Target all the icons and create a staggered animation
    gsap.fromTo(
      ".contact-icons .icon",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.2  // Delay each icon by 0.2 seconds
      }
    );
  }, []);

  return (
    <div className="main-content">
      <section id="contact">
        <h2>Contact Me</h2>

        <div className="contact-icons">
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
          <p>Phone Number: <b>+251 968078877</b></p>
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
