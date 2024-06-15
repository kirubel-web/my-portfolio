import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1.',
    image: '/public/images/project.jpg',
    tags: ['React', 'JavaScript', 'CSS']
  },
  {
    title: 'Project 2',
    description: 'Description of project 2.',
    image: '/public/images/project.jpg',
    tags: ['Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'Project 3',
    description: 'Description of project 2.',
    image: '/public/images/project.jpg',
    tags: ['Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'Project 4',
    description: 'Description of project 1.',
    image: '/public/images/project.jpg',
    tags: ['React', 'JavaScript', 'CSS']
  },
  {
    title: 'Project 5',
    description: 'Description of project 2.',
    image: '/public/images/project.jpg',
    tags: ['Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'Project 6',
    description: 'Description of project 2.',
    image: '/public/images/project.jpg',
    tags: ['Node.js', 'Express', 'MongoDB']
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
