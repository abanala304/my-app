import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ex1 from './ex1.js'
import Element from './anil.js';
class App extends Component {
  render()
  
  
  {
    return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Banala family</h1>
        </header>
        <p className="App-intro">
          anil banala, edit <code>src/App.js</code> and save to reload.
        </p>
        <Ex1 />
        <Element />
      </div>
    );
  }
}




export default App;


