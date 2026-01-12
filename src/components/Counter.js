import React from 'react';
import { useAtom } from 'jotai';
import { counterAtom } from '../store/atoms';

const Counter = () => {
  const [count, setCount] = useAtom(counterAtom);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>Counter Component</h2>
      <div className="counter-display">
        <h1>{count}</h1>
      </div>
      <div className="counter-buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;