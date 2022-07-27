import { useCallback, useEffect, useState } from "react";
import styles from "/styles/SodaMachine.module.css";
import Image from "next/image";
import SodaMachineScreen from "./SodaMachineScreen";
import { inventory, soda1, soda2, soda3, soda4 } from "../constants/inventory";
import { titles } from "../constants/text";
import MoneyReader from "./MoneyAcceptor";
import SodaButton from "./SodaButton";
import ErrorAlert from "./ErrorAlert";
import { calculatePrice, calculateTotal } from "../logic/soda";

const SodaMachine = () => {
  const [isZoomEnabled, setIsZoomEnabled] = useState(false);
  const [inventoryState, setInventoryState] = useState(inventory);
  const [purchaseStarted, setPurchaseStarted] = useState(false);
  const [sodaSelection, setSodaSelection] = useState([]);
  const [error, setError] = useState(false);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === " ") {
        setIsZoomEnabled(!isZoomEnabled);
      }
    },
    [isZoomEnabled]
  );

  const handleSodaButtonClick = (sodaName) => {
    setPurchaseStarted(true);
    const newSodaSelection = [...sodaSelection];
    newSodaSelection.pop();

    const sodaIndex = newSodaSelection.findIndex((soda) =>
      soda.sodaName.includes(sodaName)
    );
    const inventoryIndex = inventoryState.findIndex((item) =>
      item.sodaName.includes(sodaName)
    );
    if (sodaIndex !== -1) {
      const newQuantity =
        parseInt(sodaSelection[sodaIndex].sodaName.split(" ")[0]) + 1;
      newSodaSelection[sodaIndex].sodaName = `${newQuantity} ${sodaName}`;
      newSodaSelection[sodaIndex].quantity = calculatePrice(
        sodaName,
        newQuantity
      );

      if (newQuantity > inventoryState[inventoryIndex].quantity) {
        setError(true);
        newSodaSelection.splice(sodaIndex, 1);
        if (newSodaSelection.length === 0) {
          setPurchaseStarted(false);
        }
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    } else {
      newSodaSelection.push({
        sodaName: `${1} ${sodaName}`,
        quantity: calculatePrice(sodaName, 1),
      });
    }
    newSodaSelection.push({
      sodaName: "total",
      quantity: calculateTotal(newSodaSelection),
    });
    setSodaSelection(newSodaSelection);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <ErrorAlert error={titles.quantityError} isVisible={error} />
      <div
        className={`${styles["soda-machine"]} ${
          isZoomEnabled ? styles["zoom-enabled"] : styles["zoom-disabled"]
        }`}
      >
        <div className={styles.banner}>
          <Image
            src="/assets/coca-bg.png"
            alt="Soda Machine Banner"
            width={362}
            height={816}
          />
        </div>
        <div className={styles.divider} />
        <div className={styles["right-section"]}>
          <SodaMachineScreen
            title={purchaseStarted ? titles.purchase : titles.inventory}
            inventory={purchaseStarted ? sodaSelection : inventoryState}
          />
          <MoneyReader />
          <div className={styles["btn-group"]}>
            <SodaButton
              {...soda1}
              onClick={() => {
                handleSodaButtonClick(inventoryState[0].sodaName);
              }}
            />
            <SodaButton
              {...soda2}
              onClick={() => {
                handleSodaButtonClick(inventoryState[1].sodaName);
              }}
            />
            <SodaButton
              {...soda3}
              onClick={() => {
                handleSodaButtonClick(inventoryState[2].sodaName);
              }}
            />
            <SodaButton
              {...soda4}
              onClick={() => {
                handleSodaButtonClick(inventoryState[3].sodaName);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SodaMachine;
