import PropTypes from "prop-types";
import styles from "/styles/SodaButton.module.css";
import { useMachineContext } from "./MachineContextProvider";
import { addSodaToCurrentSelection } from "../logic/soda";
import { calculateTotal } from "../logic/soda";
import { quantityErrorTimeout } from "../constants/time";

const SodaButton = ({ soda, price }) => {
  const { userSodaSelection, setUserSodaSelection } = useMachineContext();
  const { setHasPurchaseStarted } = useMachineContext();
  const { areSodasDispensed } = useMachineContext();
  const { setTotal } = useMachineContext();
  const { inventory } = useMachineContext();
  const { setQuantityError } = useMachineContext();

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
    }
  };

  const handleSodaButtonClick = () => {
    if (areSodasDispensed) return;
    setHasPurchaseStarted(true);
    let newUserSodaSelection = addSodaToCurrentSelection(
      userSodaSelection,
      soda
    );
    newUserSodaSelection = validateQuantity(newUserSodaSelection);
    if (newUserSodaSelection.length === 0) setHasPurchaseStarted(false);
    setUserSodaSelection(newUserSodaSelection);
    setTotal(calculateTotal(newUserSodaSelection));
  };

  const validateQuantity = (newUserSodaSelection) => {
    const inventorySodaIndex = inventory.findIndex(
      (inventorySoda) => inventorySoda.name === soda
    );
    const selectionSodaIndex = newUserSodaSelection.findIndex(
      (selectionSoda) => selectionSoda.soda === soda
    );
    if (
      newUserSodaSelection[selectionSodaIndex].quantity >
      inventory[inventorySodaIndex].quantity
    ) {
      newUserSodaSelection.splice(selectionSodaIndex, 1);
      setQuantityError(true);
      setTimeout(() => {
        setQuantityError(false);
      }, quantityErrorTimeout);
    }
    return newUserSodaSelection;
  };

  return (
    <button
      className={styles["soda-btn"]}
      onClick={handleSodaButtonClick}
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
};

export default SodaButton;
