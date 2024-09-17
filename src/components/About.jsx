import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Animation for the entire section
    tl.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 }, // Initial state: invisible and below
      { opacity: 1, y: 0 } // Final state: fully visible and in place
    )
    .fromTo(
      paragraphRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2 }, // Stagger each paragraph
      "-=0.5" // Overlap this animation with the previous by 0.5 seconds
    );
  }, []);

  return (
    <div className="aboutroute">
      <section id="about" ref={aboutRef}>
        <div>
          <h2>About Me</h2>
          <div className="paragraph-aboutme" ref={paragraphRef}>
            <p>I'm a developer who loves solving problems.</p>
            <p>I build web apps, design APIs, and optimize databases.</p>
            <p>I'm always learning, experimenting, and improving.</p>
            <p>Let's create something amazing together.</p>
          </div>
          <a
            href="https://drive.google.com/file/d/1Bok0tqbh5pwe77zsZasGPtrOD7XBqaKB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="continue-application">
              <div>
                <div className="pencil"></div>
                <div className="folder">
                  <div className="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div className="paper"></div>
                </div>
              </div>
              Resume
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
