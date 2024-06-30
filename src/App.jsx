import Loading from "./components/Loading";
import './static/App.css';
import React, {useEffect,useState} from 'react';


import Home from './components/Home';
import { ThemeProvider } from './ThemeContext';
import Sidebar from './components/Sidebar';
import About from './components/About'



import Projects from './components/Projects';
import Contact from './components/Contact';

import { Route, Routes } from 'react-router-dom';




function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }

  return (





    <ThemeProvider>
      <Sidebar />
      <div className="App">




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
