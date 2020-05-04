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
        <main class="techstack">
          <div className="title">
            <h2 className="lg-heading">
              Tech <span className="text-secondary">Stack</span>
            </h2>
          </div>
          <div className="tech">
            <div class="front">
              <h2>Front-End</h2>
              <ul>
                <li className="javascript">
                  <h4>Vanilla JavaScript </h4>
                  <progress value="80" max="100"></progress>
                </li>
                <li className="html">
                  <h4>HTML / HTML5 </h4>
                  <progress value="99" max="100"></progress>
                </li>
                <li className="css">
                  <h4>CSS / CSS3 </h4>
                  <progress value="85" max="100"></progress>
                </li>
                <li className="jquery">
                  <h4>JQuery </h4>
                  <progress value="60" max="100"></progress>
                </li>
                <li className="react">
                  <h4>REACT</h4>
                  <progress value="40" max="100"></progress>
                </li>
                <li className="sass">
                  <h4>SASS </h4>
                  <progress value="75" max="100"></progress>
                </li>
              </ul>
            </div>

            <div class="back">
              <h2>Back-End</h2>
              <ul>
                <li className="node">
                  <h4>Node JS </h4>
                  <progress value="60" max="100"></progress>
                </li>
                <li className="express">
                  <h4>Express JS</h4>
                  <progress value="60" max="100"></progress>
                </li>
                <li className="bash">
                  <h4>Linux / Bash Script </h4>
                  <progress value="20" max="100"></progress>
                </li>
              </ul>
            </div>

            <div class="database">
              <h2>Database & ORM</h2>
              <ul>
                <li className="sql">
                  <h4>Microsoft SQL </h4>
                  <progress value="80" max="100"></progress>
                </li>
                <li className="mysql">
                  <h4>MySQL </h4>
                  <progress value="80" max="100"></progress>
                </li>
                <li className="sequelize">
                  <h4>Sequelize </h4>
                  <progress value="75" max="100"></progress>
                </li>
                <li className="mongo">
                  <h4>MongoDB </h4>
                  <progress value="30" max="100"></progress>
                </li>
                <li className="mongoose">
                  <h4>Mongoose </h4>
                  <progress value="30" max="100"></progress>
                </li>
              </ul>
            </div>

            <div class="tools">
              <h2>Other Tools and Languages</h2>
              <ul>
                <li className="ssmt">
                  <h4>SQL Server Management Tools</h4>
                  <progress value="70" max="100"></progress>
                </li>
                <li className="vscode">
                  <h4>Visual Studio Code </h4>
                  <progress value="80" max="100"></progress>
                </li>
                <li className="vs">
                  <h4>Visual Studio </h4>
                  <progress value="90" max="100"></progress>
                </li>
                <li className="java">
                  <h4>Java </h4>
                  <progress value="35" max="100"></progress>
                </li>
                <li className="c#">
                  <h4>Microsoft C# </h4>
                  <progress value="60" max="100"></progress>
                </li>
              </ul>
            </div>

            <div class="analysis">
              <h2>Data Analysis</h2>
              <ul>
                <li className="tableau">
                  <h4>Tableau </h4>
                  <progress value="40" max="100"></progress>
                </li>
                <li className="rapid">
                  <h4>Rapid Miner </h4>
                  <progress value="40" max="100"></progress>
                </li>
                <li className="tableau">
                  <h4>Python </h4>
                  <progress value="10" max="100"></progress>
                </li>
                <li className="rapid">
                  <h4>D3.JS </h4>
                  <progress value="0" max="100"></progress>
                </li>
              </ul>
            </div>

            <div class="cloud">
              <h2>Cloud Services</h2>
              <ul>
                <li className="">
                  <h4>Amazon EC2 </h4>
                  <progress value="30" max="100"></progress>
                </li>
                <li className="">
                  <h4>Amazon RDS </h4>
                  <progress value="20" max="100"></progress>
                </li>
                <li className="">
                  <h4>Amazon Elastic Beanstalk </h4>
                  <progress value="30" max="100"></progress>
                </li>
                <li className="">
                  <h4>Amazon Instances </h4>
                  <progress value="20" max="100"></progress>
                </li>
              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Techstack;
