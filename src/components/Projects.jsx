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
                alt="Project1"
              />
              <h4>Tic-Tac-Toe</h4>
              <p className="proj-desc">A Simple jQuery based game, tictactoe</p>
              <button className="btn_dark">
                <a href="#" className="btn-dark">
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
              <button className="btn_dark">
                <a href="#" className="btn-dark">
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
              <button className="btn_dark">
                <a href="#" className="btn-dark">
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
              <button className="btn_dark">
                <a href="#" className="btn-dark">
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
              <button className="btn_dark">
                <a href="#" className="btn-dark">
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
              <button className="btn_dark">
                <a href="#" className="btn-dark">
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
                A Simple contact management application using C# (Visual Studio)
              </p>
              <button className="btn_dark">
                <a href="" className="btn-dark">
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
