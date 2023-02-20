import React, { useState, useEffect } from 'react';

let time;
export default function Traverse() {
  const fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Grapes',
    'Kiwi',
    'Lemon',
    'Mango',
    'Orange',
    'Strawberry',
  ];
  const [count, setCount] = useState(1);
  const [state, setState] = useState('');

  useEffect(() => {
    clearTime();
    time = setTimeout(() => {
      setCount((prev) => (prev == fruits.length - 1 ? 0 : prev + 1));
      setState('');
    }, 1000);
  }, [count]);

  const clearTime = () => {
    if (time) {
      clearTimeout(time);
    }
  };

  const handler = (index) => {
    if (index > fruits.length - 1) {
      setCount(0);
    } else if (count < 0) {
      setCount(fruits.length - 1);
    } else {
      setCount(index);
    }
  };

  return (
    <>
      <h1>Traverse List</h1>
      <div className="slide">{fruits[count]}</div>
      <br />
      <button
        onClick={() => {
          handler(count - 1);
          setState('clicked previous button...');
        }}
      >
        &lt; Previous{' '}
      </button>
      &nbsp;
      <button
        onClick={() => {
          handler(count + 1);
          setState('clicked next button...');
        }}
      >
        Next &gt;
      </button>
      <p>{state}</p>
    </>
  );
}
