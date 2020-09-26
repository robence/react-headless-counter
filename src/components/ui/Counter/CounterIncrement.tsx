import React from 'react';

type CounterIncrementType = {
  increment: () => void;
};

export default function CounterIncrement(props: CounterIncrementType) {
  const { increment } = props;

  return (
    <div>
      <button onClick={increment}>+</button>
    </div>
  );
}
