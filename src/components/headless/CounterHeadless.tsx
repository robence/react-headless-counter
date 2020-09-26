import React, { useState } from 'react';

type ChildrenProps = {
  count: number;
  increment: (event: React.MouseEvent) => void;
  decrement: (event: React.MouseEvent) => void;
};

type CounterHeadlessType = {
  children: (childProps: ChildrenProps) => React.ReactNode;
};

export default function CounterHeadless(props: CounterHeadlessType) {
  const { children } = props;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currValue) => currValue + 1);
  };

  const decrement = () => {
    setCount((currValue) => currValue - 1);
  };

  const childProps = { count, increment, decrement };

  return <>{children(childProps)}</>;
}
