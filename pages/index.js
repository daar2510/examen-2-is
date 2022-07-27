import SodaMachine from "../components/SodaMachine";
import styles from "/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <SodaMachine />
      <h1 className={styles.title}>MÁQUINA EXPENDEDORA DE REFRESCOS</h1>
    </div>
  );
}
