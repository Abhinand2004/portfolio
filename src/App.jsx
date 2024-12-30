import React from "react";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />

      <div id="home"><Home /> </div>
      <div id="about"> <About /> </div>
      <div id="skills"> <Skills />  </div>
      <div id="projects"> <Projects />  </div>
      <div id="contact"> <Contact />  </div>
      <Footer />
    </div>
  );
};

export default App;
