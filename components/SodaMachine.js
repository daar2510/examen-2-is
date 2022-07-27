import {useEffect, useState} from "react";
import styles from "/styles/SodaMachine.module.css";
import Image from "next/image";
import SodaMachineScreen from "./SodaMachineScreen";
import inventory from "../constants/inventory";
import MoneyReader from "./MoneyAcceptor";
import SodaButton from "./SodaButton";

const SodaMachine = () => {
  const [isZoomEnabled, setIsZoomEnabled] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      setIsZoomEnabled(!isZoomEnabled);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <div className={`${styles["soda-machine"]} ${isZoomEnabled ? styles["zoom-enabled"] : styles["zoom-disabled"]}`}>
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
          <SodaMachineScreen inventory={inventory} />
          <MoneyReader />
          <div className={styles["btn-group"]}>
            <SodaButton soda="coca" price={500}/>
            <SodaButton soda="sprite" price={725} />
            <SodaButton soda="fanta" price={550} />
            <SodaButton soda="pepsi" price={600} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SodaMachine;
