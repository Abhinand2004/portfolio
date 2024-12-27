import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </Router>
  );
};

export default App;
