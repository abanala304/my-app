import React from 'react';
class Tick extends React.Component {
   render(){
    return (
      <div>
        <h1>CST Time</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
}
  }
  
  //setInterval(tick, 1000);
  export default Tick;
  