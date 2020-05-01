import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./scss/main.scss";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div>This is Projects</div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
