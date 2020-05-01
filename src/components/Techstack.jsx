import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./scss/main.scss";

class Techstack extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div>This is Techstack</div>
        <Footer />
      </div>
    );
  }
}

export default Techstack;
