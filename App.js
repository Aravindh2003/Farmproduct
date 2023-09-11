import './App.css';
import React, { useState } from "react"

function App() {
  // State
  const [counter, setCounter] = useState(0);
  // return [counter = 0, setCount = Function]

// Static Variable
  var staticCounter = 0;

  function updateCounter() {
    setCounter(counter + 1);
    staticCounter += 1;
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1>Counter-{counter}</h1>
      <h1>Static Counter- {staticCounter}</h1>
      <button onClick={updateCounter}>+</button>
    </div>
  );
}

export default App;
