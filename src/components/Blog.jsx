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
        <div className="flex-center">
          <main>
            <h3 className="sm-heading title">Coming soon...</h3>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;
