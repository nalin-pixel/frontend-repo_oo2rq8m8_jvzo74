import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Story from './components/Story';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="pt-16">
        <Hero />
        <Story />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name — UI/UX Designer • Web Developer • Front‑End Engineer
      </footer>
    </div>
  );
}

export default App;
