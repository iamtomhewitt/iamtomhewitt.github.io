import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import PageNotFound from "./containers/page not found/PageNotFound";
import Experience from "./containers/experience/Experience";
import Github from "./containers/github/Github";
import Contact from "./containers/contact/Contact";
import VRPacmac from "./containers/privacy policies/VRPacmac";
import VRTurretDefence from "./containers/privacy policies/VRTurretDefence";
import JetDashVR from "./containers/privacy policies/JetDashVR";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/experience" exact component={Experience} />
    <Route path="/github" exact component={Github} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/vr-pac-mac-privacy-policy" exact component={VRPacmac} />
    <Route path="/vr-turret-defence-privacy-policy" exact component={VRTurretDefence} />
    <Route path="/jet-dash-vr-privacy-policy" exact component={JetDashVR} />

    { /* Catch all unmatched routes */}
    <Route component={PageNotFound} />
  </Switch>;
