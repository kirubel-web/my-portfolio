import React, { useEffect, useRef } from 'react';
import './Projects.css';
import { gsap } from 'gsap';
  

const projects = [
	{
    title: 'AirBnB Clone',
    description: 'A full-stack web application that mimics the core functionality of AirBnB. Users can Search places and Book a place',
    image: '/images/hbnb_logo.png',
    tags: ['Flask', 'JQuery', 'Mysql', 'HTML5', 'CSS'],
    link: 'https://github.com/kirubel-web/AirBnB_clone_v4'
  },

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
    title: 'Movie Transcript Scraper',
    description: 'This Python script is designed to scrape movie transcripts from a website. It extracts links to movie scripts from the main page and saves individual scripts to text files',
    image: '/images/movietranscript.png',
    tags: ['Python', 'Beautifulsoup'],
    link: 'https://github.com/kirubel-web/ScriptMiner'

  },
  {
    title: 'Space News',
    description: 'A React app, which uses space news api to fetch data and display most trending space related news.',
    image: '/images/spacenews.png',
    tags: ['REACT', 'Javascript', 'HTML5'],
    link: 'https://github.com/kirubel-web/Space-News-React'

  },
  {
    title: 'Dice Game',
    description: 'A simple javascript dice game. Which i used to understand DOM manipulation..',
    image: '/images/dice.png',
    tags: ['Javascript', 'HTML5', 'css'],
    link: 'https://github.com/kirubel-web/Dice_Game'

  },
  {
    title: 'Blog API',
    description: 'A Django Blog API App implementing Rest Framework. Which generates API endpoints for CRUD operations.',
    image: '/images/blog.png',
    tags: ['Python', 'Django', 'Django Rest Framework'],
    link: 'https://github.com/kirubel-web/blogapi'

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
  const projectListRef = useRef(null); // Ref to target the list of projects

  useEffect(() => {
    // GSAP animation to fade in each project item and stagger the appearance
    gsap.fromTo(
      projectListRef.current.children,
      { opacity: 0, y: 50 }, // Initial state: invisible, moved down
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" } // Animate to visible and move up
    );
  }, []);

  return (
    <div className="main-content">
      <section id="projects">
        <h2>My Projects</h2>

        <div className="project-list" ref={projectListRef}>
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, idx) => (
                    <span className="tag" key={idx}>{tag}</span>
                  ))}
                </div>
                <div className='button-link'>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className='visitbtn'>
                      Visit
                      <div className="arrow-wrapper">
                        <div className="arrow"></div>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
