import { useState } from 'react';
import React from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="counter mt-3">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default Counter;
