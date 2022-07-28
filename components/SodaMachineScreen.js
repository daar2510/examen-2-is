import styles from "/styles/SodaMachineScreen.module.css";
import { useMachineContext } from "./MachineContextProvider";
import { calculatePrice } from "../logic/soda";
import { titles } from "/constants/text";

const SodaMachineScreen = () => {
  const { hasPurchaseStarted } = useMachineContext();
  const { userSodaSelection } = useMachineContext();
  const { inventory } = useMachineContext();
  const { total } = useMachineContext();

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
          <p>{soda.quantity}</p>
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

  const renderText = () => {
    if (hasPurchaseStarted) {
      return renderUserSodaSelection();
    } else {
      return renderInventory();
    }
  };

  return <div className={styles.screen}>{renderText()}</div>;
};

export default SodaMachineScreen;
