import PropTypes from "prop-types";
import styles from "/styles/SodaMachineScreen.module.css";
import { titles } from "../constants/text";

const SodaMachineScreen = ({ inventory }) => {
  return (
    <div className={styles.screen}>
      <p className={styles.title}>{titles.inventory}</p>
      <ul className={styles.list}>
        {inventory.map((item) => (
          <li key={item.sodaName} className={styles.item}>
            <p className={styles.sodaName}>{item.sodaName}</p>
            <p className={styles.quantity}>{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

SodaMachineScreen.propTypes = {
  inventory: PropTypes.arrayOf(
    PropTypes.shape({
      sodaName: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SodaMachineScreen;