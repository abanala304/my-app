import React from 'react';
class Tick extends React.Component {
   render(){
    return (
      <div>
        <h1>I'm in CST Time now</h1>
        <h2>now the time is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
}
  }
  
  //setInterval(tick, 1000);
  export default Tick;
  