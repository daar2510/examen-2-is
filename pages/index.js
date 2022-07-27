import SodaMachine from "../components/SodaMachine";
import styles from "/styles/Home.module.css";
import { titles } from "../constants/text";

export default function Home() {
  return (
    <div className={styles.main}>
      <SodaMachine />
      <h1 className={styles.title}>{titles.homeTitle}</h1>
    </div>
  );
}
