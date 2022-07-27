import styles from "/styles/Money.module.css";
import PropTypes from "prop-types";

const Money = ({ value, total, setTotal }) => {
  return (
    <div
      className={styles.coin}
      onClick={() => {
        if (total > 1) setTotal(total - value);
      }}
    >
      <p className={styles["money-text"]}>{value}</p>
    </div>
  );
};

Money.propTypes = {
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
};

export default Money;
