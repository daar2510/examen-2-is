import styles from "/styles/Money.module.css";
import PropTypes from "prop-types";
import { useMachineContext } from "./MachineContextProvider";
import { insertCoin } from "/logic/soda";
import { updateSodasDispensedTimeout } from "../constants/time";

const Money = ({ value }) => {
  const { total, setTotal } = useMachineContext();
  const { hasPurchaseStarted } = useMachineContext();
  const { areSodasDispensed, setAreSodasDispensed } = useMachineContext();

  const handleCoinClick = () => {
    if (hasPurchaseStarted && !areSodasDispensed) {
      const newTotal = insertCoin(total, value);
      if (newTotal <= 0 && hasPurchaseStarted) {
        setTimeout(() => {
          setAreSodasDispensed(true);
        }, updateSodasDispensedTimeout);
      }
      setTotal(newTotal);
    }
  };

  return (
    <div className={styles.coin} onClick={handleCoinClick}>
      <p className={styles["money-text"]}>{value}</p>
    </div>
  );
};

Money.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Money;
