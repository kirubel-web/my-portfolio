import React, { useContext } from 'react'; 
import '../index.css'
import './Sidebar.css';
import { ThemeContext } from '../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faProjectDiagram, faEnvelope, faIndustry } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {


  const { theme, toggleTheme } = useContext(ThemeContext);

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
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
};

export default Sidebar;
