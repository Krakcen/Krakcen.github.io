import React, { Component } from 'react';
import './App.css';

//
import NavBarApp from './NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBarApp />
          <h2>Welcome to Hugo</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
