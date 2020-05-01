import React, { Component } from "react";
import "./scss/main.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const menuNav = document.querySelector(".menu-nav");

    let navItems = document.querySelectorAll(".nav-item");

    let showMenu = false;

    const toggleMenu = () => {
      if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));

        //reset Menu State
        showMenu = true;
      } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));

        //reset Menu State
        showMenu = false;
      }
    };

    menuBtn.addEventListener("click", toggleMenu);
  }
  render() {
    return (
      <div className="container">
        <header>
          <div className="menu-btn">
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>
          <div className="hide-navbar"></div>

          <nav className="menu">
            <ul className="menu-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link current">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/techstack" className="nav-link">
                  Tech Stack
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  My Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  My Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
