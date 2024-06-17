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
    title: 'Project 3',
    description: 'Description of project 2.',
    image: '/images/project.jpg',
    tags: ['Node.js', 'Express', 'MongoDB'],
    link: 'github.com'

  },
  {
    title: 'Project 4',
    description: 'Description of project 1.',
    image: '/images/project.jpg',
    tags: ['Java', 'JavaFX', 'SceneBuilder'],
    link: 'github.com'

  },
  {
    title: 'Project 5',
    description: 'Description of project 2.',
    image: '/images/project.jpg',
    tags: ['Node.js', 'Express', 'MongoDB'],
    link: 'github.com'

  },
  {
    title: 'Project 6',
    description: 'Description of project 2.',
    image: '/images/project.jpg',
    tags: ['Node.js', 'Express', 'MongoDB'],
    link: 'github.com'

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
