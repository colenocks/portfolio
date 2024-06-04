import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './scss/main.scss';
import HTML5 from '../assets/skills/HTML-5.png';
import CSS3 from '../assets/skills/CSS-3.png';
import JavaScript from '../assets/skills/JavaScript.png';
import MongoDB from '../assets/skills/MongoDB.png';
import MySQL from '../assets/skills/MySQL.png';
import NodeJS from '../assets/skills/Node-JS.png';
import ReactJS from '../assets/skills/React.png';
import Sass from '../assets/skills/Sass.png';
import ExpressJS from '../assets/skills/ExpressJS.png';
import JQuery from '../assets/skills/JQuery.png';
import Git from '../assets/skills/Git.png';
// import Java from '../assets/skills/Java.png';
// import CSharp from '../assets/skills/C-Sharp.png';

const Techstack = () => {
  const skills = [
    { title: 'HTML', className: 'html', logo: HTML5 },
    { title: 'CSS', className: 'css', logo: CSS3 },
    { title: 'JavaScript', className: 'javascript', logo: JavaScript },
    { title: 'Sass', className: 'sass', logo: Sass },
    { title: 'React', className: 'react', logo: ReactJS },
    { title: 'jQuery', className: 'jquery', logo: JQuery },
    { title: 'Node JS', className: 'node', logo: NodeJS },
    { title: 'Express JS', className: 'express', logo: ExpressJS },
    { title: 'MySQL', className: 'mysql', logo: MySQL },
    { title: 'MongoDB & Mongoose', className: 'mongo', logo: MongoDB },
    { title: 'Git', className: 'git', logo: Git },
  ];

  return (
    <div>
      <Navbar />
      <main className="techstack">
        <div className="title">
          <h2 className="lg-heading">
            Tech <span className="text-secondary">Stack</span>
          </h2>
        </div>
        <div className="tech">
          <div className="skills">
            <div>
              {skills.map(skill => {
                return <img src={skill.logo} alt={skill.title} key={skill.title} />;
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Techstack;
