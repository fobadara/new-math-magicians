import PropTypes from 'prop-types';

const Screen = (props) => {
  const {
    state: { total, operation, next },
  } = props;

  return (
    <div id="screen" className="text-break h-25">
      <span>{total}</span>
      <span>{operation}</span>
      <span>{next}</span>
    </div>
  );
};

Screen.propTypes = {
  state: PropTypes.shape({
    total: PropTypes.oneOfType([
      PropTypes.shape({}).isRequired,
      PropTypes.string.isRequired,
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
