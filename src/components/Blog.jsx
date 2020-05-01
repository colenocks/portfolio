import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./scss/main.scss";

class Blog extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div>This is Blog; coming soon</div>
        <Footer />
      </div>
    );
  }
}

export default Blog;
