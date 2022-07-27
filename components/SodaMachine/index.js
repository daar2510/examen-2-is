import SodaButton from "../SodaButton";
import styles from "../../styles/SodaMachine.module.css";

const SodaMachine = () => {
    return (
        <>
            <SodaButton className={styles["soda-machine"]} soda={"coca"} />
            <SodaButton className={styles["soda-machine"]} soda={"sprite"} />
            <SodaButton className={styles["soda-machine"]} soda={"fanta"} />
            <SodaButton className={styles["soda-machine"]} soda={"pepsi"} />
        </>
    );
};

export default SodaMachine;
