import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Aside from './aside';
import Screen from './screen';
import Keypad from './keypad';

const keys = [
  { id: 'clear', class: 'operators', value: 'AC' },
  { id: 'plus/minus', class: 'numbers', value: '+/-' },
  { id: 'percent', class: 'operators', value: '%' },
  { id: 'division', class: 'operators right', value: '÷' },
  { id: 'seven', class: 'numbers', value: '7' },
  { id: 'eight', class: 'numbers', value: '8' },
  { id: 'nine', class: 'numbers', value: '9' },
  { id: 'multiply', class: 'operators right', value: 'x' },
  { id: 'four', class: 'numbers', value: '4' },
  { id: 'five', class: 'numbers', value: '5' },
  { id: 'six', class: 'numbers', value: '6' },
  { id: 'subtract', class: 'operators right', value: '-' },
  { id: 'one', class: 'numbers', value: '1' },
  { id: 'two', class: 'numbers', value: '2' },
  { id: 'three', class: 'numbers', value: '3' },
  { id: 'add', class: 'operators right', value: '+' },
  { id: 'zero', class: 'numbers', value: '0' },
  { id: 'decimal', class: 'operators', value: '.' },
  { id: 'equals', class: 'operators right', value: '=' },
];

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  // Add eventlistener to buttons
  const handleButtonClick = (event) => {
    const { total, next, operation } = calculate(state, event.target.name);
    setState({ total, next, operation });
  };
  return (
    <div className="d-sm-flex justify-content-between">
      <div className="w-25">
        <Aside />
      </div>
      <div className="w-50">
        <div>
          <Screen state={state} />
        </div>
        <div>
          <Keypad keys={keys} onClick={handleButtonClick} state={state} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
