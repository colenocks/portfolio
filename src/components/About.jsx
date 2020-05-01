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
        <div>This is About</div>
        <Footer />
      </div>
    );
  }
}

export default About;
