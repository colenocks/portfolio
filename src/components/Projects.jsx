import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./scss/main.scss";

class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="flex-center">
          <main>
            <h3 className="sm-heading title">
              Project section will be up in less than 12hrs in...
            </h3>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
