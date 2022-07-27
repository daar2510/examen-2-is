import SodaMachine from "../components/SodaMachine";
import styles from "/styles/Home.module.css";
import { titles } from "../constants/text";
import Menu from "../components/Menu";
import MachineContextProvider from "../components/MachineContextProvider";

export default function Home() {
  return (
    <MachineContextProvider>
      <div className={styles.main}>
        <SodaMachine />
        <div>
          <h1 className={styles.title}>{titles.homeTitle}</h1>
          <Menu />
        </div>
      </div>
    </MachineContextProvider>
  );
}
