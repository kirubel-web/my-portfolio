import React, {useState} from 'react';
import './static/App.css';
import { ThemeProvider } from './ThemeContext';
import Sidebar from './components/Sidebar';
import About from './components/About'



import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {

  return (
    <ThemeProvider>
      <div className="App">


        <Sidebar />
        <div className="main-content">
          <h1 className='intro'>Hey there 👋 I'm Kirubel</h1>

          <About />
          <Projects />
          <Contact />

        </div>


      </div>
    </ThemeProvider>
  );
}

export default App;
