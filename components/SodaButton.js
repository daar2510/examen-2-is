import PropTypes from "prop-types";
import styles from "/styles/SodaButton.module.css";

const SodaButton = ({ soda, price, onClick }) => {
  return (
    <button className={styles["soda-btn"]} onClick={onClick}>
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
  onClick: PropTypes.func,
};

export default SodaButton;
