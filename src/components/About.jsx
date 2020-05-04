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
              src={require("../assets/coleImage.jpg")}
              alt="Coleman Enocks"
            />
            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>
                I am a Front End Developer on the path to becoming a Full Stack
                Engineer with the help of a few mentors and learning resources
                in the web. I am doing my best not to get overwhelmed by the
                loads of information on web development.
              </p>

              <p>
                I have a Master's Degree in Information systems with Computing.
                For over 2 years, I have developed as an intermediate programmer
                in Web Development Technologies. Although I lay more emphasis on
                web design and development, I can be classified as a Software
                Engineer as I have basic knowledge of the likes of Java and C#
                and most importantly, a knack for learning new technologies.{" "}
              </p>

              <p>
                I look forward to the opportunity to progress further into my
                web development career. I have more than enough knowledge to get
                started with lots of creative ideas as I continue on my journey
                to becoming a Full Stack Engineer. I have what it takes!
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
