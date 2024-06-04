import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './scss/main.scss';

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="contact">
          <div className="title">
            <h1 className="lg-heading">
              Contact <span className="text-secondary">Me</span>
            </h1>
          </div>
          <h2 className="sm-heading">Let's get in touch...</h2>
          <div className="boxes">
            <div>
              <a href="mailto:colenocks@yahoo.com">
                <span className="text-secondary">Email: </span>
                colenocks@yahoo.com
              </a>
            </div>
            <div>
              <span className="text-secondary">Twitter: </span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/@colenocks">
                https://www.twitter.com/@colenocks
              </a>
            </div>
            <div>
              <span className="text-secondary">LinkedIn: </span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/coleman-enocks">
                https://www.linkedin.com/in/coleman-enocks
              </a>
            </div>
            <div>
              <span className="text-secondary">Github: </span>
              <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/colenocks">
                https://www.github.com/colenocks
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Contact;
