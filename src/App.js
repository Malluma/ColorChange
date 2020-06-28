import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [color, setColor] = useState(0)

  function randomColor(){

    var r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256));
    
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  }

  function handleOnClick(){
    setColor(randomColor())
  }

  return (
    <div className="App">
      <header className="App-header">
        <button style={{backgroundColor: color}} onClick={handleOnClick}>Change color!</button>  
      </header>
    </div>
  );
}

export default App;
