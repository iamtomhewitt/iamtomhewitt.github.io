import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="App">
          <Home/>
        </div>
      </div>
    );
  }
}

export default App;
