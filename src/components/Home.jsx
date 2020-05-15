import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./scss/main.scss";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="home">
          <h2 className="lg-heading">
            Coleman <span>Enocks</span>
          </h2>
          <h3 className="sm-heading">
            Web Developer, Software Engineer
            <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
              💻
            </span>
            , Content Writer
            <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
              📝
            </span>{" "}
            & Semi-Professional Footballer{" "}
            <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
              ⚽🏆🥇
            </span>
          </h3>
          <div className="icons">
            <a href="https://www.twitter.com/@encole9">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/coleman-enocks">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://www.github.com/colenocks">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
