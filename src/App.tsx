//import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;