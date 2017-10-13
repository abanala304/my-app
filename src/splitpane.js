import React from 'react';
function Contacts() {
    return <div className="Contacts" />;
  }
  
  function Chat() {
    return <div className="Chat" />;
  }
    function Anil() {
    return <div className="Anil" />;
  }
  
  function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
        <div className="SplitPane-middle">
          {props.middle}
      </div>
        </div>
    );
  }
  
  function App() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
    
        right={
          <Chat />
        } 
         middle={
          <Anil />
        }/>
    );
  }
  export default 