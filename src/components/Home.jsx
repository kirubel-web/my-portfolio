import React, {useState} from 'react';

import '../static/App.css';


import { ThemeProvider } from '../ThemeContext';
import Sidebar from './Sidebar';
import About from './About'



import Projects from './Projects';
import Contact from './Contact';




function Home() {

  return (






      <div className="App">



          <h1 className='intro'>Hey there 👋, I'm Kirubel</h1>


          <About/>
          <Projects/>


          <Contact/>



      </div>



  );
}

export default Home;
