import React, { useContext } from 'react';
import '../index.css'
import './Sidebar.css';
import { ThemeContext } from '../ThemeContext';
import ToggleButton from '../ToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faProjectDiagram, faEnvelope, faHome ,faLink, faCertificate} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'


const Sidebar = () => {


  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <div className='sidebar'>

      <NavLink to="/" exact activeClassName="active"><img src={"/images/profile.jpg"} alt="" className='profilepic' /></NavLink>




      <h3><FontAwesomeIcon icon={faLink} />Kirubel</h3>

      <nav>
        <ul>

        <li><NavLink to="/" exact activeClassName="active"><FontAwesomeIcon icon={faHome} /> &nbsp; Home  </NavLink></li>

        <li><NavLink to="/about" exact activeClassName="active"><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;  About </NavLink></li>

        <li><NavLink to="/projects" exact activeClassName="active"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</NavLink></li>


        <li><NavLink to="/contact" exact activeClassName="active"><FontAwesomeIcon icon={faEnvelope} /> Contact</NavLink></li>





        </ul>
      </nav>
      <ToggleButton />
    </div>
  );
};

export default Sidebar;
