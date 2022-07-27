import PropTypes from "prop-types";
import styles from "/styles/SodaButton.module.css";

const SodaButton = ({ soda, price, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <button
      className={styles["soda-btn"]}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
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
