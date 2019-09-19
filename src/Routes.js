import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import PageNotFound from "./containers/PageNotFound";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";
import PrivacyPolicyVRPacmac from "./containers/PrivacyPolicyVRPacmac";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/experience" exact component={Experience} />
    <Route path="/projects" exact component={Projects} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/vr-pac-mac-privacy-policy" exact component={PrivacyPolicyVRPacmac} />

    { /* Catch all unmatched routes */}
    <Route component={PageNotFound} />
  </Switch>;
