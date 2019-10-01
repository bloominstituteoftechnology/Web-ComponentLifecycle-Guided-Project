import React, { useState } from 'react';

export default function Counter({ user }) {
  const [count, setCount] = useState(0);
  const increment = event => setCount(count + 1);
  const decrement = event => setCount(count - 1);
  return (
    <div className='component'>
      <div>The count is {count}</div>
      <div>The user is {user}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

class TheCounter extends React.Component {
  constructor(props) {
    
  }

  increment = () => { }

  decrement = () => { }

  render() {
    return null;
  }
}
