import React from 'react';
import { Button } from '../ui';

type CounterDecrementType = {
  decrement: () => void;
};

export default function CounterDecrement(props: CounterDecrementType) {
  const { decrement } = props;

  return (
    <div>
      <Button onClick={decrement}>-</Button>
    </div>
  );
}
