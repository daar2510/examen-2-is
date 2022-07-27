import PropTypes from "prop-types";
import styles from "/styles/SodaButton.module.css";

const SodaButton = ({ soda }) => {
  return (
    <button className={styles["soda-btn"]}>
      <div className={`${styles["soda-img"]} ${styles[soda]}`} />
    </button>
  );
};

SodaButton.propTypes = {
  soda: PropTypes.string.isRequired,
};

export default SodaButton;
