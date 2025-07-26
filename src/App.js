import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`App${darkMode ? ' dark-mode' : ''}`}>
      <Navbar onToggleDarkMode={handleToggleDarkMode} darkMode={darkMode} />
      <main>
        <HeroSection />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
