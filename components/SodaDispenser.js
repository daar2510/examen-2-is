import styles from "/styles/SodaDispenser.module.css";
import { useMachineContext } from "./MachineContextProvider";
import Image from "next/image";
import { updateInventory } from "/logic/soda";
import { sodaCanHeight, sodaCanWidth } from "../constants/size";

const SodaDispenser = () => {
  const { areSodasDispensed, setAreSodasDispensed } = useMachineContext();
  const { userSodaSelection, setUserSodaSelection } = useMachineContext();
  const { setHasPurchaseStarted } = useMachineContext();
  const { setTotal } = useMachineContext();
  const { inventory, setInventory } = useMachineContext();

  const renderSodaCans = () => {
    const sodaCans = [];
    userSodaSelection.forEach((selection) => {
      const soda = selection.soda;
      sodaCans.push(
        <Image
          key={soda}
          src={`/assets/${soda}.png`}
          alt={soda}
          width={sodaCanWidth}
          height={sodaCanHeight}
        />
      );
    });
    return sodaCans;
  };

  const collectSodas = () => {
    const newInventory = updateInventory(inventory, userSodaSelection);
    setInventory(newInventory);
    setUserSodaSelection([]);
    setAreSodasDispensed(false);
    setHasPurchaseStarted(false);
    setTotal(0);
  };

  return (
    <div className={styles["dispenser-border"]}>
      <div className={styles["dispenser"]}>
        <div className={styles["soda-cans"]} onClick={collectSodas}>
          {areSodasDispensed && renderSodaCans()}
        </div>
        ;
      </div>
    </div>
  );
};

export default SodaDispenser;
