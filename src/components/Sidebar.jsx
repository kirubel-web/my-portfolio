import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faProjectDiagram, faEnvelope, faIndustry } from '@fortawesome/free-solid-svg-icons'
import '../index.css'
import './Sidebar.css';


const Sidebar = () => {




  return (
    <div className="sidebar">
      <h1><FontAwesomeIcon icon={faIndustry} />Kirubel</h1>

      <nav>
        <ul>
          <li><a href="#about"><FontAwesomeIcon icon={faUser} /> About</a></li>
          <li><a href="#projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</a></li>
          <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
