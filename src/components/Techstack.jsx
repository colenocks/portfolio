import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./scss/main.scss";
import CSharp from "../assets/skills/C-Sharp.png";
import Git from "../assets/skills/Git.png";
import HTML5 from "../assets/skills/HTML-5.png";
import CSS3 from "../assets/skills/CSS-3.png";
import Java from "../assets/skills/Java.png";
import JavaScript from "../assets/skills/JavaScript.png";
import MongoDB from "../assets/skills/MongoDB.png";
import MySQL from "../assets/skills/MySQL.png";
import NodeJS from "../assets/skills/Node-JS.png";
import ReactJS from "../assets/skills/React.png";
import Sass from "../assets/skills/Sass.png";
import MaterializeCSS from "../assets/skills/MaterializeCSS.png";
import Npm from "../assets/skills/Npm.png";
import Bash from "../assets/skills/Bash.png";
import Sequelize from "../assets/skills/Sequelize.png";
import ExpressJS from "../assets/skills/ExpressJS.png";
import JQuery from "../assets/skills/JQuery.png";
import Tableau from "../assets/skills/Tableau.png";

const Techstack = () => {
  const frontend = [
    { title: "HTML", className: "html", logo: HTML5 },
    { title: "CSS", className: "css", logo: CSS3 },
    { title: "JavaScript", className: "javascript", logo: JavaScript },
    { title: "Sass", className: "sass", logo: Sass },
    { title: "Materialize", className: "materialize", logo: MaterializeCSS },
    { title: "React", className: "react", logo: ReactJS },
    { title: "jQuery", className: "jquery", logo: JQuery },
  ];

  const backend = [
    { title: "Node JS", className: "node", logo: NodeJS },
    { title: "Express JS", className: "express", logo: ExpressJS },
    { title: "Bash", className: "bash", logo: Bash },
  ];

  const database = [
    { title: "MySQL", className: "mysql", logo: MySQL },
    { title: "Sequelize", className: "sequelize", logo: Sequelize },
    { title: "MongoDB & Mongoose", className: "mongo", logo: MongoDB },
  ];

  const others = [
    { title: "Git", className: "git", logo: Git },
    { title: "NPM", className: "npm", logo: Npm },
    { title: "Tableau", className: "tableau", logo: Tableau },
    { title: "Java", className: "Java", logo: Java },
    { title: "C#", className: "csharp", logo: CSharp },
  ];

  return (
    <div>
      <Navbar />
      <main class='techstack'>
        <div className='title'>
          <h2 className='lg-heading'>
            Tech <span className='text-secondary'>Stack</span>
          </h2>
        </div>
        <div className='tech'>
          <div class='front'>
            <h2>Frontend</h2>
            <div>
              {frontend.map((skill) => {
                return <img src={skill.logo} alt={skill.title} />;
              })}
            </div>
          </div>
          <div class='back'>
            <h2>Backend</h2>

            <div>
              {backend.map((skill) => {
                return <img src={skill.logo} alt={skill.title} />;
              })}
            </div>
          </div>

          <div class='database'>
            <h2>Databases Management</h2>

            <div>
              {database.map((skill) => {
                return <img src={skill.logo} alt={skill.title} />;
              })}
            </div>
          </div>

          <div class='tools'>
            <h2>Other Tools & Languages</h2>

            <div>
              {others.map((skill) => {
                return <img src={skill.logo} alt={skill.title} />;
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
