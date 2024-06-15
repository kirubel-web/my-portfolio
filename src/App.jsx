import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About'


import './static/App.css';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <h1 className='intro'>Hey there 👋 I'm Kirubel</h1>

      <About />
      <Projects />
      <Contact />

      </div>


    </div>
  );
}

export default App;
