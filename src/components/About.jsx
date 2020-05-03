import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./scss/main.scss";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <main className="about">
          <div className="title">
            <h2 className="lg-heading">
              About <span className="text-secondary">Me</span>
            </h2>
          </div>
          <h3 className="sm-heading">Here are a few information about me...</h3>
          <div className="about-info">
            <img
              className="bioimage"
              src={require("../assets/background-note.jpg")}
              alt="Coleman Enocks"
            />
            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt architecto earum itaque tempora eaque atque ab ex.
                Voluptate tenetur odit, itaque ab quisquam ex incidunt dolorem,
                deleniti suscipit, ipsa voluptatum!
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default About;
