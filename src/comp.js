import React, { Component } from 'react';
class Ex3 extends Component {
    constructor(props) {
      super(props);
      this.state = {Hello: 'number'};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        5000
      );
    }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        Hello: 'Rao'
      });
    }
  
    render() {
      return (
        <div>
          <h1>Click The button!</h1>
          <h2>to increment {this.state.Hello}.</h2>
        </div>
      );
    }
  }
  export default Ex3;