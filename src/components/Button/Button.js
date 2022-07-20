import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClickLoadMore }) => {
  return (
    <button
      type="button"
      className={styles.Button}
      onClick={() => onClickLoadMore()}
    >
      Load more
    </button>
  );
};


Button.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};

export default Button;