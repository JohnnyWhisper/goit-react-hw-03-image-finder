import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';
const LoaderSpinner = () => {
  return (
    <ThreeDots
      className={styles.Loader}
      color="#00BFFF"
      height={80}
      width={80}
    />
  );
};

export default LoaderSpinner;