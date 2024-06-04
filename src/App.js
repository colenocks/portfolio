import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Techstack from './components/Techstack';
import Projects from './components/Projects';
import Blog from './components/Blog';
import DefaultPage from './components/DefaultPage';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/techstack" element={<Techstack />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route component={DefaultPage} />
      </Routes>
    </div>
  );
}

export default App;
