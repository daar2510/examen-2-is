import { useCallback, useEffect, useState } from "react";
import styles from "/styles/SodaMachine.module.css";
import Image from "next/image";
import SodaMachineScreen from "./SodaMachineScreen";
import { inventory, soda1, soda2, soda3, soda4 } from "../constants/inventory";
import MoneyReader from "./MoneyAcceptor";
import SodaButton from "./SodaButton";

const SodaMachine = () => {
  const [isZoomEnabled, setIsZoomEnabled] = useState(false);
  const [inventoryState, setInventoryState] = useState(inventory);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === " ") {
        setIsZoomEnabled(!isZoomEnabled);
      }
    },
    [isZoomEnabled]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
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
          <SodaMachineScreen inventory={inventoryState} />
          <MoneyReader />
          <div className={styles["btn-group"]}>
            <SodaButton {...soda1} />
            <SodaButton {...soda2} />
            <SodaButton {...soda3} />
            <SodaButton {...soda4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SodaMachine;
