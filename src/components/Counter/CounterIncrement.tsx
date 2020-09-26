import React from 'react';
import { Button } from '../ui';

type CounterIncrementType = {
  increment: (event: React.MouseEvent) => void;
};

export default function CounterIncrement(props: CounterIncrementType) {
  const { increment } = props;

  return (
    <div>
      <Button onClick={increment}>+</Button>
    </div>
  );
}
