import styles from "/styles/SodaMachine.module.css";
import Image from "next/image";
import SodaMachineScreen from "./SodaMachineScreen";
import inventory from "../constants/inventory";
import MoneyReader from "./MoneyAcceptor";

const SodaMachine = () => {
  return (
    <>
      <div className={styles["soda-machine"]}>
        <div className={styles.banner}>
          <Image
            src="/assets/coca-bg.png"
            alt="Soda Machine Banner"
            width={362}
            height={816}
          />
        </div>
        <div className={styles.divider} />
      </div>
      <SodaMachineScreen inventory={inventory} />
      <MoneyReader />
    </>
  );
};

export default SodaMachine;
