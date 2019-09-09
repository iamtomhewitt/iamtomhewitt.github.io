import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import PageNotFound from "./containers/PageNotFound";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/experience" exact component={Experience} />
    <Route path="/projects" exact component={Projects} />

    { /* Catch all unmatched routes */}
    <Route component={PageNotFound} />
  </Switch>;
