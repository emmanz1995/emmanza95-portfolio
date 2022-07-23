import React, { useState, useEffect } from 'react';
import Hero from './components/Header';
import About from './components/About';
import { createGlobalStyle } from 'styled-components';
import { ScrollerMotion } from 'scroller-motion';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import {useScroll} from "framer-motion";
import Menu from "./components/Menu";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    overscroll-behavior: none;
    width: 100%;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }
`

function App() {
  const [reveal, setReveal] = useState(false);
  const revealMenu = () => setReveal(!reveal);
  return (
    <div className="App">
      <GlobalStyles />
      {/*<ScrollerMotion>*/}
        <Navbar revealMenu={revealMenu} />
        {!reveal && <Menu revealMenu={revealMenu} />}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      {/*</ScrollerMotion>*/}
    </div>
  );
}

export default App;
