import React from 'react';
class State2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {emp: '21staff'};
    }
  
    render() {
      return (
        <div>
          <h1>I'm in Texas now!</h1>
          <h2>My employer is {this.state.emp}.</h2>
        </div>
      );
    }
  }
  export default State2;
  