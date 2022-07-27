import styles from "/styles/MoneyAcceptor.module.css";

const MoneyAcceptor = () => {
  return (
    <div className={styles.container}>
      <div className={styles["money-acceptor"]}>
        <div className={styles["bill-slot"]} />
      </div>
      <div className={styles["coin-slot"]} />
    </div>
  );
};

export default MoneyAcceptor;
