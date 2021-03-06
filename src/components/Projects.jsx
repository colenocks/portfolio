import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./scss/main.scss";
import workplace from "../assets/workplace.jpg";
import cyob from "../assets/cyob.jpg";
import snakerace from "../assets/snakerace.jpg";
import hoop from "../assets/basketball-hoop.jpg";
import balon from "../assets/balon-d-or2019.jpg";
import note from "../assets/background-note.jpg";
import cmdb from "../assets/cmdb.jpg";

class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className='project'>
          <div className='title'>
            <h1 className='lg-heading'>
              My <span className='text-secondary'>Projects</span>
            </h1>
          </div>
          <h3 className='sm-heading'>
            These are a few projects I've worked on...
          </h3>
          <div className='project-info'>
            <div className='proj'>
              <img className='proj-image' src={workplace} alt='tictactoe' />
              <h4>Tic-Tac-Toe</h4>
              <p className='proj-desc'>A Simple jQuery based game, tictactoe</p>
              <p className='tools'>
                <span>Stack: </span> HTML, CSS, JavaScript
              </p>
              <button className='btn_dark'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/colenocks/Simple_TicTacToe_Game'
                  className='btn-dark'>
                  <i className='fab fa-github fa-2x'></i>
                </a>
              </button>
            </div>
            <div className='proj'>
              <img className='proj-image' src={cyob} alt='cyob' />
              <h4>Cycle of benefits</h4>
              <p className='proj-desc'>
                A waste management crowdsourcing platform of environmentally
                related projects publicly available for interested persons to
                work on and gain rewards
              </p>
              <p className='tools'>
                <span>Stack: </span> HTML, CSS, JavaScript, Node, Express,
                Amazon RDS, Amazon EC2, SQL,
              </p>
              <button className='btn_dark'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/colenocks/cycle_of_benefits'
                  className='btn-dark'>
                  <i className='fab fa-github fa-2x'></i>
                </a>
              </button>
            </div>
            <div className='proj'>
              <img className='proj-image' src={snakerace} alt='snakerace' />
              <h4>Snakerace</h4>
              <p className='proj-desc'>
                A real time multiplayer functionality was added to the classic
                snake game using <strong>socket.io</strong>- a web Socket npm
                package dependency. The game was developed using vanilla
                Javascript and Node JS.
              </p>
              <p className='tools'>
                <span>Stack: </span> HTML, CSS, JavaScript, Node JS, Express
              </p>
              <button className='btn_dark'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/colenocks/Multiplayer_Snake_Game_EIS'
                  className='btn-dark'>
                  <i className='fab fa-github fa-2x'></i>
                </a>
              </button>
            </div>
            <div className='proj'>
              <img className='proj-image' src={hoop} alt='hoops' />
              <h4>Hoops</h4>
              <p className='proj-desc'>
                This HTML5 canvas based basketball-like game was developed as a
                little tribute to the Basketball legend, Kobe Bryant as well as
                his daughter and all who lost their lives on the 26th of january
                2020.
              </p>
              <p className='tools'>
                <span>Stack: </span> HTML5, CSS, JavaScript, Node, Express
              </p>
              <button className='btn_dark'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/colenocks/hoops'
                  className='btn-dark'>
                  <i className='fab fa-github fa-2x'></i>
                </a>
              </button>
            </div>
            <div className='proj'>
              <img className='proj-image' src={balon} alt='pic-puzzle' />
              <h4>Pic-Puzzle</h4>
              <p className='proj-desc'>
                A memory card flip JavaScript application
              </p>
              <p className='tools'>
                <span>Stack: </span> HTML, CSS, JavaScript
              </p>
              <button className='btn_dark'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/colenocks/pic-puzzle'
                  className='btn-dark'>
                  <i className='fab fa-github fa-2x'></i>
                </a>
              </button>
            </div>
            <div className='proj'>
              <img className='proj-image' src={note} alt='my portfolio' />
              <h4>My Portfolio</h4>
              <p className='proj-desc'>
                A personal portfolio built using React
              </p>
              <p className='tools'>
                <span>Stack: </span> HTML, CSS, JavaScript, React
              </p>
              <button className='btn_dark'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/colenocks/portfolio'
                  className='btn-dark'>
                  <i className='fab fa-github fa-2x'></i>
                </a>
              </button>
            </div>
            <div className='proj'>
              <img
                className='proj-image'
                src={cmdb}
                alt='contact management app'
              />
              <h4>Contact Management App</h4>
              <p className='proj-desc'>
                A Simple contact management database application using C#
                (Visual Studio)
              </p>
              <p className='tools'>
                <span>Stack: </span> C#, Windows Forms, XML
              </p>
              <button className='btn_dark'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/colenocks/MyCMDBApp'
                  className='btn-dark'>
                  <i className='fab fa-github fa-2x'></i>
                </a>
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Projects;
