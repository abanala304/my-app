import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ex1 from './ex1.js'
import State2 from './state2.js';
import Tick from './anil2.js'
import Fun from './anil.js';
import Props from './props.js';
import App2 from './props2.js';
import Props3 from './state.js';
import Ex3 from './comp.js';
import Ex2 from './component.js';
class App extends Component {
  render() {
 return (
    <div className="App">
        <header className="App-header">
          <img1 src={logo} className="App-logo" alt="logo" />
          <img src="http://raosrestaurants.com/images/raos_logo_home.jpg" alt="Mountain View" />
          <h1 className="App-title">Banala family</h1>
        </header>
        <Ex1 />
        <Fun />
        <State2 />
        <Tick />
        <Props />
        <App2 name="Ajay!" />
        <Props3 />
        <Ex3 />
        <Ex2 />
      </div>
    );
  }
}export default App;


