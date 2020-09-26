import React, { useState } from 'react';
import './App.css';
import {
  CounterDecrement,
  CounterDisplay,
  CounterIncrement,
} from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currValue) => currValue + 1);
  };

  const decrement = () => {
    setCount((currValue) => currValue - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <CounterDecrement decrement={decrement} />
        <CounterDisplay count={count} />
        <CounterIncrement increment={increment} />
      </header>
    </div>
  );
}

export default App;
