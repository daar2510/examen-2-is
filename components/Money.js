import styles from "/styles/Money.module.css";
import PropTypes from "prop-types";
import { useMachineContext } from "./MachineContextProvider";

const Money = ({ value }) => {
  const { total, setTotal } = useMachineContext();
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
};

export default Money;
