import { useCallback, useEffect, useState } from "react";
import styles from "/styles/SodaMachine.module.css";
import Image from "next/image";
import SodaMachineScreen from "./SodaMachineScreen";
import { titles } from "../constants/text";
import MoneyAcceptor from "./MoneyAcceptor";
import ErrorAlert from "./ErrorAlert";
import { useMachineContext } from "./MachineContextProvider";
import MachineButtons from "./MachineButtons";

const SodaMachine = () => {
  const { isZoomEnabled, setIsZoomEnabled } = useMachineContext();
  const { quantityError } = useMachineContext();

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
      <ErrorAlert error={titles.quantityError} isVisible={quantityError} />
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
          <SodaMachineScreen />
          <MoneyAcceptor />
          <MachineButtons />
        </div>
      </div>
    </>
  );
};

export default SodaMachine;
