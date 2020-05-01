import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import DefaultPage from "./components/DefaultPage";
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/techstack" component={Techstack} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route component={DefaultPage} />
      </Switch>
    </div>
  );
}

export default App;
