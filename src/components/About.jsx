import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import coleImage from "../assets/coleImage.jpg";
import "./scss/main.scss";

const About = () => {
  return (
    <div>
      <Navbar />
      <main className='about'>
        <div className='title'>
          <h2 className='lg-heading'>
            About <span className='text-secondary'>Me</span>
          </h2>
        </div>
        <div className='about-info'>
          <img className='bioimage' src={coleImage} alt='Coleman Enocks' />
          <div className='bio'>
            <h3 className='text-secondary'>BIO</h3>
            <p>
              I am a Javascript Developer, I work well with Javascript, CSS,
              Sass C#, React, Node, RestAPIs, SQL, MongoDB, Tableau, Git,
              Bootstrap and Material-UI.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
