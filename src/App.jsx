import React, {useState} from 'react';
import './static/App.css';

import Home from './components/Home';
import { ThemeProvider } from './ThemeContext';
import Sidebar from './components/Sidebar';
import About from './components/About'



import Projects from './components/Projects';
import Contact from './components/Contact';

import { Route, Routes } from 'react-router-dom';



function App() {

  return (





    <ThemeProvider>
      <div className="App">

        <Sidebar />


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>

        </div>


    </ThemeProvider>


  );
}

export default App;
