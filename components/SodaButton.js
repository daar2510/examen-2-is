import PropTypes from "prop-types";
import styles from "/styles/SodaButton.module.css";

const SodaButton = ({ soda, price }) => {
  return (
    <button className={styles["soda-btn"]}>
      <div className={`${styles["soda-img"]} ${styles[soda]}`}>
        <div className={styles["price-tag"]}>
          <p className={styles["price"]}>{`¢${price}`}</p>
        </div>
      </div>
    </button>
  );
};

SodaButton.propTypes = {
  soda: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SodaButton;
