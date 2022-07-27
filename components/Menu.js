import Image from "next/image";
import styles from "/styles/Menu.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import MyMoney from "./MyMoney";
import { titles } from "../constants/text";

const Menu = ({ total, setTotal }) => {
  const [myMoneyref, setMyMoneyRef] = useState(null);
  const [isMyMoneyOpened, setIsMyMoneyOpened] = useState(false);
  const handleMyMoneyClick = (event) => {
    setMyMoneyRef(myMoneyref ? null : event.currentTarget);
    setIsMyMoneyOpened(!isMyMoneyOpened);
  };
  return (
    <>
      <MyMoney
        total={total}
        setTotal={setTotal}
        isOpen={isMyMoneyOpened}
        setIsOpen={setIsMyMoneyOpened}
        anchorElement={myMoneyref}
        setAnchorElement={setMyMoneyRef}
      />
      <div className={styles.menu}>
        <div className={styles.item} onClick={handleMyMoneyClick}>
          <Image
            className={styles["item-icon"]}
            src="/assets/coins.png"
            alt="coin"
            width={80}
            height={80}
          />
          <span className={styles["item-text"]}>{titles.money}</span>
        </div>
        <div className={styles.item}>
          <Image
            className={styles["item-icon"]}
            src="/assets/book.png"
            alt="book"
            width={80}
            height={80}
          />
          <span className={styles["item-text"]}>{titles.tutorial}</span>
        </div>
        <div className={styles.item}>
          <Image
            className={styles["item-icon"]}
            src="/assets/tool.png"
            alt="tool"
            width={80}
            height={80}
          />
          <span className={styles["item-text"]}>{titles.settings}</span>
        </div>
      </div>
    </>
  );
};

Menu.propTypes = {
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
};

export default Menu;
