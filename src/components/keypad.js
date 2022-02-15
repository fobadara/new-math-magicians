import PropTypes from 'prop-types';
import '../css/keypad.css';

// Create button tags
const createButtons = (props) => props.keys.map((key) => (
  <button
    name={key.value}
    type="button"
    onClick={props.onClick}
    id={key.id}
    className={key.class}
    key={key.id}
  >
    {key.value}
  </button>
));

const Keypad = (props) => (
  <span className="min-vh-75" id="keypad-container">{createButtons(props)}</span>
);

createButtons.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Keypad;
