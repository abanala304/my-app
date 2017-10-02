import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ex1 from './ex1.js'
import Tick from './anil2.js'
import Fun from './anil.js';
import App1 from './props.js';
import App3 from './props2.js';
class App extends Component {
  render() {
 return (
    <div className="App">
        <header className="App-header">
          <img1 src={logo} className="App-logo" alt="logo" />
          <img src="http://raosrestaurants.com/images/raos_logo_home.jpg" alt="Mountain View" />
          <h1 className="App-title">Banala family</h1>
        </header>
        <p className="App-intro">
          Welcome To Everyone, edit <code>src/App.js</code> and save to reload.~
        </p>
        <Ex1 />
        <Fun />
        <Tick />
        <App1 />
        <App3 name="Anil" />
      </div>
    );
  }
}export default App;


