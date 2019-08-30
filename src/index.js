import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Link, HashRouter as Router, Switch } from 'react-router-dom'
import Projects from './components/Projects';
import * as serviceWorker from './serviceWorker';

import './index.css';
import PageNotFound from './components/PageNotFound';

const routing = (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/projects" component={Projects} />
            <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
