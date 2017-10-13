import React from 'react';
function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function WelcomeDialog() {
    return (
      <FancyBorder color="red">
        <h1 className="Dialog-title">
          Hello Everyone
        </h1>
        <p className="Dialog-message">
          This is Anil Rao Banala
        </p>
      </FancyBorder>
    );
  }
export default FancyBorder;