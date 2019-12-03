import React, { useState, useEffect, Component } from 'react';

export default class CounterNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(`
      the component is being instantiated (constructor)
    `);
    debugger
  }

  componentDidMount() { // do not use arrow syntax for lifecycles
    console.log(`
      count is ${this.state.count} and DOM surgery is done after first render.
      **** componentDidMount ****
      This is where you do:
        - ajax requests
        - further DOM surgery using jQuery
        - set timers
        - set up event listeners
    `);
    // this.setState({ count: 1 });
    debugger
  }

  componentDidUpdate(oldProps, oldState) {
    console.log(`
    count is ${this.state.count} and DOM surgery is done after
    SUBSEQUENT DOM SURGERIES CAUSED BY WHATEVER CHANGE IN STATE OR PROPS.
    THIS DOES NOT RUN AFTER 1ST DOM SURGERY
    **** componentDidUpdate ****
    This is where you do:
      - ajax requests
      - further DOM surgery using jQuery
      - set timers
      - set up event listeners
  `);
    if (oldState.count !== this.state.count) {
      // arb code that runs only if it's count that changed
      // useEffect() [count] <- runs after 1st DOM surgery, and sub
      console.log(`old count was ${oldState.count} and new count is ${this.state.count}`);
    }
    debugger
  }

  componentWillUnmount() {
    // this code runs BEFORE
    // the component is unmounted
    console.log('component about to be removed from DOM, do cleanup');
    debugger
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
    console.log(`
      count is ${this.state.count} and the component is about to render.
    `);
    debugger
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

    return () => {
      console.log('this runs only right before component unmount');
    };
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
