import React, { useState, useEffect, Component } from 'react';

export default class CounterNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      // eslint is not happy
      count: this.state.count + 1,
    });
  }

  decrement = () => {
    // the right way to compute
    // new slice off of old slice
    this.setState(st => ({
      // callback syntax
      count: st.count - 1,
    }));
  }

  render() {
    return (
      <div style={{ borderColor: 'red' }} className='component'>
        <h5>{this.props.user}&apos;s count:</h5>
        <div>The count is {this.state.count}</div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export function Counter({ user }) {
  const [count, setCount] = useState(0);

  const increment = event => setCount(count + 1);
  const decrement = event => setCount(count - 1);

  useEffect(() => {
    debugger
    console.log(`
      count is ${count} and DOM surgery is done after first render. This is where you do:
        - ajax requests
        - further DOM surgery using jQuery
        - set timers
        - set up event listeners
    `);
    // axios.get().then(res => put response is state)
    setCount(1);
  }, []);

  useEffect(() => {
    debugger
    console.log(`
    count is ${count} and DOM surgery is done after first render OR subsequent renders
      which are caused by changes in "count"
      This is where you do:
        - etc etc
    `);
  }, [count]);

  console.log(`
    render runs at count of ${count}
  `);
  debugger
  return (
    <div style={{ borderColor: 'red' }} className='component'>
      <h5>{user}&apos;s count:</h5>
      <div>The count is {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
