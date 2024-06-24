import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Student Management System',
    description: 'Java App allows users to manage student information, including adding, updating, deleting, and searching student records. ',
    image: '/images/dashboard.png',
    tags: ['Java', 'JavaFX', 'SceneBuilder'],
    link: 'https://github.com/kirubel-web/Student_Managment'
  },
  {
    title: 'Yegna Bus Booking system',
    description: 'An online booking system, A web solution that allows potential guests to self-book and pay through the website,',
    image: '/images/yegna.png',
    tags: ['HTML5', 'CSS', 'PHP'],
    link: 'https://github.com/kirubel-web/Yegana-Frontend'

  },
  {
    title: 'Audible Bestsellers Scraper',
    description: 'This Python script is designed to scrapebook titles, authors, and lengths and saves the data to a CSV file',
    image: '/images/audible.png',
    tags: ['Python', 'Selenium', 'Pandas'],
    link: 'https://github.com/kirubel-web/audible-scraper'

  },
  {
    title: 'Project 4',
    description: 'Description of project 1.',
    image: '/images/project.jpg',
    tags: ['Java', 'JavaFX', 'SceneBuilder'],
    link: 'github.com'

  },
  {
    title: 'Calculator',
    description: 'A simple Django web app. Which i used to understand Django Framework.',
    image: '/images/calculator.png',
    tags: ['Python', 'Django'],
    link: 'https://github.com/kirubel-web/calculator-django'

  },
  {
    title: 'Guess My Number',
    description: 'A simple javascript game. Which i used to understand DOM manipulation.',
    image: '/images/guess.png',
    tags: ['Javascript', 'HTML5', 'CSS'],
    link: 'https://github.com/kirubel-web/Guess_my_num'

  },


];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span className="tag" key={index}>{tag}</span>
                ))}
              </div>
              <div className='button-link'>
              <a href={project.link} target="_blank"> <button> Visit</button> </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
