import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ex1 from './ex1.js'
import Tick from './anil2.js'
import Fun from './anil.js';
import App1 from './props.js';
class App extends Component {
  render() {
 return (
    <div className="App">
        <header className="App-header">
          <img1 src={logo} className="App-logo" alt="logo" />
          <img src="https://i.pinimg.com/736x/b8/be/f5/b8bef5902e49262e301b4134ae48fb9b--ganesha-paintings-ganesha-art.jpg" alt="Mountain View" />
          <h1 className="App-title">Banala family</h1>
        </header>
        <p className="App-intro">
          Welcome To Everyone, edit <code>src/App.js</code> and save to reload.
        </p>
        <Ex1 />
        <Fun />
        <Tick />
        <App1 />
      </div>
    );
  }
}export default App;


