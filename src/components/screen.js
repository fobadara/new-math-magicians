// Please ignore the comment on line 5.
// It is necessary because we were instructed to write
// our code with classes and not stateless function

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Screen extends Component {
  render() {
    const {
      state: { total, operation, next },
    } = this.props;

    return (
      <div id="screen">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
    );
  }
}

Screen.propTypes = {
  state: PropTypes.shape({
    total: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({}).isRequired,
    ]),
    operation: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({}).isRequired,
    ]),
    next: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({}).isRequired,
    ]),
  }).isRequired,
};

export default Screen;
