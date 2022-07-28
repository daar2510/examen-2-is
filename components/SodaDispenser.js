import styles from "/styles/SodaDispenser.module.css";

const SodaDispenser = () => {
  return (
    <div className={styles["dispenser-border"]}>
      <div className={styles["dispenser"]} />
    </div>
  );
};

export default SodaDispenser;
