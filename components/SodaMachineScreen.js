import styles from "/styles/SodaMachineScreen.module.css";
import { useMachineContext } from "./MachineContextProvider";
import { calculatePrice, sumAllCoins } from "../logic/soda";
import { titles } from "/constants/text";

const SodaMachineScreen = () => {
  const { areSodasDispensed } = useMachineContext();
  const { hasPurchaseStarted } = useMachineContext();
  const { userSodaSelection } = useMachineContext();
  const { inventory } = useMachineContext();
  const { total } = useMachineContext();
  const { changeCoins } = useMachineContext();

  const renderUserSodaSelection = () => {
    const selectionFields = userSodaSelection.map((selection) => {
      return (
        <div className={styles.field} key={selection.soda}>
          <p>{`${selection.quantity} ${selection.soda}`}</p>
          <p>{calculatePrice(selection.soda, selection.quantity)}</p>
        </div>
      );
    });
    return (
      <>
        <p className={styles.title}>{titles.purchase}</p>
        {selectionFields}
        <div className={styles.field}>
          <p>{titles.priceToPay}</p>
          <p>{total}</p>
        </div>
      </>
    );
  };

  const renderInventory = () => {
    const inventoryFields = inventory.map((soda) => {
      return (
        <div className={styles.field} key={soda.name}>
          <p>{soda.name}</p>
          <p className={soda.quantity === 0 ? styles.error : ""}>
            {soda.quantity}
          </p>
        </div>
      );
    });
    return (
      <>
        <p className={styles.title}>{titles.inventory}</p>
        {inventoryFields}
      </>
    );
  };

  const renderChange = () => {
    const changeFields = changeCoins.map((coin) => {
      return (
        <div className={styles.field} key={coin.value}>
          <p>{`${coin.quantity} moneda${coin.quantity > 1 ? "s" : ""} de ${
            coin.value
          }`}</p>
        </div>
      );
    });
    return (
      <>
        <div className={`${styles.field} ${styles["extra-space"]}`}>
          <p>{`${titles.change} ${sumAllCoins(changeCoins)} ${
            titles.currencyName
          }`}</p>
        </div>
        <div className={`${styles.field} ${styles["extra-space"]}`}>
          <p>{titles.breakdown}</p>
        </div>
        {changeFields}
      </>
    );
  };

  const renderCollectSoda = () => {
    return (
      <>
        <p className={`${styles.title} ${styles["extra-space"]}`}>
          {titles.thanks}
        </p>
        <div className={`${styles.field} ${styles["extra-space"]}`}>
          <p>{titles.collectSoda}</p>
        </div>
      </>
    );
  };

  const renderText = () => {
    if (changeCoins.length > 0) {
      return renderChange();
    } else if (areSodasDispensed) {
      return renderCollectSoda();
    } else if (hasPurchaseStarted) {
      return renderUserSodaSelection();
    } else {
      return renderInventory();
    }
  };

  return <div className={styles.screen}>{renderText()}</div>;
};

export default SodaMachineScreen;
