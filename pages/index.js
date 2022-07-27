import SodaMachine from "../components/SodaMachine";
import styles from "/styles/Home.module.css";
import { titles } from "../constants/text";
import { useState } from "react";
import Menu from "../components/Menu";
import MachineContextProvider from "../components/MachineContextProvider";

export default function Home() {
  const [total, setTotal] = useState(1);
  return (
    <MachineContextProvider>
      <div className={styles.main}>
        <SodaMachine total={total} setTotal={setTotal} />
        <div>
          <h1 className={styles.title}>{titles.homeTitle}</h1>
          <Menu total={total} setTotal={setTotal} />
        </div>
      </div>
    </MachineContextProvider>
  );
}
