import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./scss/main.scss";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div>This is Contact</div>
        <Footer />
      </div>
    );
  }
}

export default Contact;