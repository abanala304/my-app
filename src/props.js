import React from 'react';
function Welcome(props) {
    return <div>
           <h1>Hello, {props.FirstName}</h1>
           <h2>Hello, {props.MiddleName}</h2>
           <h3>Hello, {props.LastName}</h3>
      </div>
  }
  
  function App1() {
    return (
      <div>
        <Welcome FirstName="Anil" MiddleName="Rao" LastName="Banala" />
       
      </div>
    );
  }
  export default App1;