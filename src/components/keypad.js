import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Keypad extends Component {
  createButtons() {
    const { keys, onClick } = this.props;

    return (
      keys.map((key) => <button name={key.value} type="button" onClick={onClick} id={key.id} className={key.class} key={key.id}>{key.value}</button>)
    );
  }

  render = () => (
    <span id="keypad-container">{this.createButtons()}</span>
  );
}

Keypad.propTypes = {
  keys: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Keypad;
