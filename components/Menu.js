import Image from "next/image";
import styles from "/styles/Menu.module.css";
import { useState } from "react";
import MyMoney from "./MyMoney";
import { titles } from "../constants/text";
import { menuIconSize } from "../constants/size";
import Tutorial from "./Tutorial";
import Settings from "./Settings";

const Menu = () => {
  const [myMoneyref, setMyMoneyRef] = useState(null);
  const [isMyMoneyOpened, setIsMyMoneyOpened] = useState(false);
  const handleMyMoneyClick = (event) => {
    setMyMoneyRef(myMoneyref ? null : event.currentTarget);
    setIsMyMoneyOpened(!isMyMoneyOpened);
  };
  const [tutorialRef, setTutorialRef] = useState(null);
  const [isTutorialOpened, setIsTutorialOpened] = useState(false);
  const handleTutorialClick = (event) => {
    setTutorialRef(tutorialRef ? null : event.currentTarget);
    setIsTutorialOpened(!isTutorialOpened);
  };
  const [settingsRef, setSettingsRef] = useState(null);
  const [isSettingsOpened, setIsSettingsOpened] = useState(false);
  const handleSettingsClick = (event) => {
    setSettingsRef(settingsRef ? null : event.currentTarget);
    setIsSettingsOpened(!isSettingsOpened);
  };
  return (
    <>
      <MyMoney
        isOpen={isMyMoneyOpened}
        setIsOpen={setIsMyMoneyOpened}
        anchorElement={myMoneyref}
        setAnchorElement={setMyMoneyRef}
      />
      <Tutorial
        isOpen={isTutorialOpened}
        setIsOpen={setIsTutorialOpened}
        anchorElement={tutorialRef}
        setAnchorElement={setTutorialRef}
      />
      <Settings
        isOpen={isSettingsOpened}
        setIsOpen={setIsSettingsOpened}
        anchorElement={settingsRef}
        setAnchorElement={setSettingsRef}
      />
      <div className={styles.menu}>
        <div className={styles.item} onClick={handleMyMoneyClick}>
          <Image
            className={styles["item-icon"]}
            src="/assets/coins.png"
            alt="coin"
            width={menuIconSize}
            height={menuIconSize}
          />
          <span className={styles["item-text"]}>{titles.money}</span>
        </div>
        <div className={styles.item} onClick={handleTutorialClick}>
          <Image
            className={styles["item-icon"]}
            src="/assets/book.png"
            alt="book"
            width={menuIconSize}
            height={menuIconSize}
          />
          <span className={styles["item-text"]}>{titles.tutorial}</span>
        </div>
        <div className={styles.item} onClick={handleSettingsClick}>
          <Image
            className={styles["item-icon"]}
            src="/assets/tool.png"
            alt="tool"
            width={menuIconSize}
            height={menuIconSize}
          />
          <span className={styles["item-text"]}>{titles.settings}</span>
        </div>
      </div>
    </>
  );
};

export default Menu;
