import React from 'react';
function LetterList(props) {
    const letters = props.letters;
    const listItems = letters.map((letter) =>
      <li key={letter.toString()}>
        {letter}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
 
  export default LetterList;