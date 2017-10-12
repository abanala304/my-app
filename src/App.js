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
//import Ex3 from './comp.js';
//import Ex2 from './component.js';
import Toggle from './toggle.js'
import LoginControl from './loginControl.js';
import LoginButton from './loginButton.js';
import LogoutButton from './logoutButton.js';
import LetterList from './listedkeys.js';
import Listandkey from './listedkeys2.js';
import Calculator from './liftingstate.js';
class App extends Component {
  render() {
  const letters = ['x', 'y', 'z', 'a', 'b'];
    
 return (
    <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        {/* //<Ex3 /> */}
        {/* <Ex2 /> */}
        <Toggle />
        <LoginControl />
        <LoginButton />
        <LogoutButton />
        <LetterList letters={letters} />
        <Listandkey />
        <Calculator />

      </div>
    );
  }
}export default App;


