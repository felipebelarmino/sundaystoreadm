import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
import Repositories from "./Pages/Repositories";
import Contact from "./Pages/Contact";
import HeaderComponent from "./Components/Header/Header";
import About from "./Pages/About";

export default function Routes() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/repositories" exact component={Repositories} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
