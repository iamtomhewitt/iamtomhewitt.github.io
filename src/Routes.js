import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import PageNotFound from "./containers/PageNotFound";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/experience" exact component={Experience} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/contact" exact component={Contact} />

    { /* Catch all unmatched routes */}
    <Route component={PageNotFound} />
  </Switch>;
