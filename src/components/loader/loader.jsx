import PropTypes from 'prop-types';
import './loader.css';

export const Loader = () => {
  return (
    <div>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
};

Loader.propTypes = {
  state: PropTypes.object,
  loading: PropTypes.bool,
};
