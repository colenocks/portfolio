import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import coleImage from '../assets/coleImage.png';
import './scss/main.scss';

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="about">
        <div className="title">
          <h2 className="lg-heading">
            About <span className="text-secondary">Me</span>
          </h2>
        </div>
        <div className="about-info">
          <img className="bioimage" src={coleImage} alt="Coleman Enocks" />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Hi, I'm Coleman Enocks, a Software Developer/Frontend Developer, I work well with Javascript, Typescript, TailwindCSS, Sass, React, Vue,
              Node.js, Git, MySQL, MongoDB, UI Frameworks and more.
            </p>
            <p>Connect with me, let's create some cool stuffs.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
