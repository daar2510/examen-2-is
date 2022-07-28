import SodaButton from "./SodaButton";
import { sodas } from "/data/sodas";
import styles from "/styles/MachineButtons.module.css";

const MachineButtons = () => {
  const renderButtons = () => {
    return sodas.map((soda) => {
      return <SodaButton key={soda.name} soda={soda.name} price={soda.price} />;
    });
  };

  return <div className={styles["btn-group"]}>{renderButtons()}</div>;
};

export default MachineButtons;
