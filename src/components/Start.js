import React from 'react';

const Start = () => {
  
  function startTheGame() {
    alert('Hello, World!');
  }
  
  return (
    <button onClick={startTheGame}>Start Game!</button>
  );
};

export default Start;