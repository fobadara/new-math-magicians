import React, { Component } from 'react';
import Screen from './screen';
import Keypad from './keypad';
import calculate from '../logic/calculate';

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

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
  }

  // Add eventlistener to buttons
  handleButtonClick = (event) => {
    const { total, next, operation } = calculate(this.state, event.target.name);
    this.setState({ total, next, operation });
  }

  render = () => {
    const data = this.state;
    return (
      <main>
        <div>
          <div>
            <Screen state={this.state} />
          </div>
          <div>
            <Keypad keys={keys} onClick={this.handleButtonClick} state={{ ...data }} />
          </div>
        </div>
      </main>
    );
  }
}

export default Calculator;
