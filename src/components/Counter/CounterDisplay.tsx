import React from 'react';

type CounterDecrementType = {
  count: number;
};

export default function CounterDisplay(props: CounterDecrementType) {
  const { count } = props;

  return (
    <div>
      <span>{count}</span>
    </div>
  );
}
