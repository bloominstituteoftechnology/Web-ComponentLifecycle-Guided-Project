import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Todos from './components/Todos';
import Counter from './components/Counter';
import Form from './components/Form';
import Market from './components/Market';

import './App.less';

function App() {
  const [counterOn, setCounterOn] = useState(false);

  return <>
    <button onClick={() => setCounterOn(true)}>counter on</button>
    <button onClick={() => setCounterOn(false)}>counter off</button>

    {counterOn && <Counter user='Pere' />}
    {/* <Todos user='Pereira' />
    <Form user='Mariam' />
    <Market user='Megan' /> */}
  </>;
}

ReactDOM.render(<App />, document.querySelector('#target'));
