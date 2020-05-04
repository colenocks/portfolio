import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./scss/main.scss";

class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="project">
          <div className="title">
            <h1 className="lg-heading">
              My <span className="text-secondary">Projects</span>
            </h1>
          </div>
          <h2 className="sm-heading">These are some of my works...</h2>
          <div className="project-info">
            <div className="proj">
              <img
                className="proj-image"
                src={require("../assets/workplace.jpg")}
                alt="tictactoe"
              />
              <h4>Tic-Tac-Toe</h4>
              <p className="proj-desc">A Simple jQuery based game, tictactoe</p>
              <p className="tools">
                <span>Tools: </span> HTML, CSS, JavaScript
              </p>
              <button className="btn_dark">
                <a
                  target="_blank"
                  href="https://github.com/colenocks/Simple_TicTacToe_Game"
                  className="btn-dark"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </button>
            </div>
            <div className="proj">
              <img
                className="proj-image"
                src={require("../assets/cyob.jpg")}
                alt="cyob"
              />
              <h4>Cycle of benefits</h4>
              <p className="proj-desc">
                A crowdsourcing platform of environmentally related projects
                publicly available for interested persons to work on and gain
                rewards
              </p>
              <p className="tools">
                <span>Tools: </span> HTML, CSS, JavaScript, Node, Express,
                Amazon RDS, Amazon EC2, SQL,
              </p>
              <button className="btn_dark">
                <a
                  target="_blank"
                  href="https://github.com/colenocks/cycle_of_benefits"
                  className="btn-dark"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </button>
            </div>
            <div className="proj">
              <img
                className="proj-image"
                src={require("../assets/snakerace.jpg")}
                alt="snakerace"
              />
              <h4>Snakerace</h4>
              <p className="proj-desc">
                A real time multiplayer functionality was added to the classic
                snake game using <strong>socket.io</strong>- a web Socket npm
                package dependency. The game was developed using vanilla
                Javascript and Node JS.
              </p>
              <p className="tools">
                <span>Tools: </span> HTML, CSS, JavaScript, Node JS, Express
              </p>
              <button className="btn_dark">
                <a
                  target="_blank"
                  href="https://github.com/colenocks/Multiplayer_Snake_Game_EIS"
                  className="btn-dark"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </button>
            </div>
            <div className="proj">
              <img
                className="proj-image"
                src={require("../assets/basketball-hoop.jpg")}
                alt="hoops"
              />
              <h4>Hoops</h4>
              <p className="proj-desc">
                This HTML5 canvas based basketball-like game was developed as a
                little tribute to the Basketball legend, Kobe Bryant as well as
                his daughter and all who lost their lives on the 26th of january
                2020.
              </p>
              <p className="tools">
                <span>Tools: </span> HTML5, CSS, JavaScript, Node, Express
              </p>
              <button className="btn_dark">
                <a
                  target="_blank"
                  href="https://github.com/colenocks/hoops"
                  className="btn-dark"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </button>
            </div>
            <div className="proj">
              <img
                className="proj-image"
                src={require("../assets/balon-d-or2019.jpg")}
                alt="pic-puzzle"
              />
              <h4>Pic-Puzzle</h4>
              <p className="proj-desc">
                A memory card flip JavaScript application
              </p>
              <p className="tools">
                <span>Tools: </span> HTML, CSS, JavaScript
              </p>
              <button className="btn_dark">
                <a
                  target="_blank"
                  href="https://github.com/colenocks/pic-puzzle"
                  className="btn-dark"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </button>
            </div>
            <div className="proj">
              <img
                className="proj-image"
                src={require("../assets/background-note.jpg")}
                alt="my portfolio"
              />
              <h4>My Portfolio</h4>
              <p className="proj-desc">
                A personal portfolio built using React
              </p>
              <p className="tools">
                <span>Tools: </span> HTML, CSS, JavaScript, React
              </p>
              <button className="btn_dark">
                <a
                  target="_blank"
                  href="https://github.com/colenocks/portfolio"
                  className="btn-dark"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </button>
            </div>
            <div className="proj">
              <img
                className="proj-image"
                src={require("../assets/cmdb.jpg")}
                alt="contact management app"
              />
              <h4>Contact Management App</h4>
              <p className="proj-desc">
                A Simple contact management database application using C#
                (Visual Studio)
              </p>
              <p className="tools">
                <span>Tools: </span> C#, Windows Forms, XML
              </p>
              <button className="btn_dark">
                <a
                  target="_blank"
                  href="https://github.com/colenocks/MyCMDBApp"
                  className="btn-dark"
                >
                  <i className="fab fa-github"> View on Github</i>
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
