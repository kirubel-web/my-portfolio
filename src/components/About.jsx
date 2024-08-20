import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="aboutroute">
      <section id="about">
        <div>
          <h2>About Me</h2>
	  <div className="paragragh-aboutme">
          <p>
            I'm a passionate developer who loves turning complex problems into simple, elegant solutions. With a blend of creativity and technical skill, I craft digital experiences that are not only functional but also enjoyable to use. </p>
<p>
Whether I’m building a dynamic web application, designing an intuitive API, or optimizing a database, I’m all about finding the best tools and strategies to get the job done efficiently. I’m constantly learning, experimenting, and pushing the boundaries of what’s possible in tech.
	</p>
	  <p>
When I’m not coding, you’ll find me exploring the latest in tech trends, tinkering with new tools, or diving deep into a challenging project. I believe in the power of technology to transform lives, and I’m here to make my mark.

Let’s create something amazing together.          </p></div>
          <a href={"https://drive.google.com/file/d/1p4XM-SGEjh9XIDEzowgQ3R17ZtTJrdpE/view?usp=sharing"} target="_blank">
          <button class="continue-application">
    <div>
        <div class="pencil"></div>
        <div class="folder">
            <div class="top">
                <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
            </div>
            <div class="paper"></div>
        </div>
    </div>
    Resume
</button>
</a>
        </div>

      </section>



    </div>
  )

}

export default About;
