import React from 'react';
import './App.css';
import {
  CounterDecrement,
  CounterDisplay,
  CounterIncrement,
} from './components/ui/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterIncrement />
        <CounterDisplay />
        <CounterDecrement />
      </header>
    </div>
  );
}

export default App;
