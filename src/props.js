import React from 'react';
function Welcome(props) {
    return <div>
           <h1>Im looking for {props.firstName}</h1>
           <h2>do you have any {props.middleName}</h2>
           <h3>if you have it what is the {props.lastName}.</h3>
      </div>
  }
  
  function Props() {
    return (
      <div>
        <Welcome firstName="job" middleName="Job openings" lastName="pay" />
       
      </div>
    );
  }
  export default Props;