import Image from "next/image";
import styles from "../../styles/SodaButton.module.css";

const SodaButton = ({ soda }) => {
    return (
        <button className={styles["soda-btn"]}>
            <div className={`${styles["soda-img"]} ${styles[soda]}`} />
        </button>
    );
};

export default SodaButton;
