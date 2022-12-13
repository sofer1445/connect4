import React from 'react';
import Board from './Board';
import './Button.css';


const App = () =>{
    const img = document.createElement('img');
    img.src = 'con4.jpg';
  return (
      <div >
          <Board />
    </div>
  );
}

export default App;
