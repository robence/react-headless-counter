import React from 'react';

type CounterDecrementType = {
  decrement: () => void;
};

export default function CounterDecrement(props: CounterDecrementType) {
  const { decrement } = props;

  return (
    <div>
      <button onClick={decrement}>-</button>
    </div>
  );
}
