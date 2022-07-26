import { useCallback, useEffect } from "react";
import styles from "/styles/SodaMachine.module.css";
import Image from "next/image";
import SodaMachineScreen from "./SodaMachineScreen";
import { machineImageWidth, machineImageHeight } from "../constants/size";
import MoneyAcceptor from "./MoneyAcceptor";
import ErrorAlert from "./ErrorAlert";
import { useMachineContext } from "./MachineContextProvider";
import MachineButtons from "./MachineButtons";
import SodaDispenser from "./SodaDispenser";

const SodaMachine = () => {
  const { isZoomEnabled, setIsZoomEnabled } = useMachineContext();

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === " ") {
        setIsZoomEnabled(!isZoomEnabled);
      }
    },
    [isZoomEnabled, setIsZoomEnabled]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <ErrorAlert />
      <div
        className={`${styles["soda-machine"]} ${
          isZoomEnabled ? styles["zoom-enabled"] : styles["zoom-disabled"]
        }`}
      >
        <div className={styles.banner}>
          <Image
            src="/assets/coca-bg.png"
            alt="Soda Machine Banner"
            width={machineImageWidth}
            height={machineImageHeight}
          />
          <SodaDispenser />
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
