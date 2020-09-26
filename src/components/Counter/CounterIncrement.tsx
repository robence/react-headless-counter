import React from 'react';
import { Button } from '../ui';

type CounterIncrementType = {
  increment: () => void;
};

export default function CounterIncrement(props: CounterIncrementType) {
  const { increment } = props;

  return (
    <div>
      <Button onClick={increment}>+</Button>
    </div>
  );
}
