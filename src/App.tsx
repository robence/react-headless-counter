import React from 'react';
import './App.css';
import {
  CounterDecrement,
  CounterDisplay,
  CounterIncrement,
} from './components/Counter';
import CounterHeadless from './components/headless/CounterHeadless';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterHeadless>
          {({ count, increment, decrement }) => (
            <>
              <CounterDecrement decrement={decrement} />
              <CounterDisplay count={count} />
              <CounterIncrement increment={increment} />
            </>
          )}
        </CounterHeadless>
      </header>
    </div>
  );
}

export default App;
