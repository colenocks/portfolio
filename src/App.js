import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
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
        <Route exact path="/" component={Home} />
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
