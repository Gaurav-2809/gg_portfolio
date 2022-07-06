import React from 'react';
import './App.css';
import Navigation from './componenets/Navigation';
import Home from './componenets/Home';
import About from './componenets/About';
import Skills from './componenets/Skills';
import Contact from './componenets/Contact';
import Resume from './componenets/Resume';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <>

      <Router>
        <Navigation />
        <Routes>
          <Route path="#home" element={<Home />} />
          <Route path="#about" element={<About />} />
          <Route path="#Resume" element={<Resume />} />
          <Route path="#hire" element={<Skills />} />
          <Route path="#contact" element={<Contact />} />
        </Routes>
        <Home />
        <About />
        <Resume/>
        <Skills />
        <Contact />
      </Router>
    </>
  );
}


export default App;
