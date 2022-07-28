import { Popper, Box, Badge } from "@mui/material";
import PropTypes from "prop-types";
import { titles } from "../constants/text";
import { subMenuIconSize } from "../constants/size";
import styles from "/styles/Menu.module.css";
import badgeStyles from "/styles/MyMoney.module.css";
import Image from "next/image";
import { useMachineContext } from "./MachineContextProvider";
import { sodas } from "../data/sodas";
import { coins } from "../data/coins";

const Settings = ({ isOpen, setIsOpen, anchorElement, setAnchorElement }) => {
  const {
    setHasPurchaseStarted,
    setAreSodasDispensed,
    setUserSodaSelection,
    setInventory,
    setChangeCoins,
    setMachineCoins,
    setTotal,
    setNoCoinsError,
  } = useMachineContext();

  const resetInventory = () => {
    setTotal(0);
    setHasPurchaseStarted(false);
    setAreSodasDispensed(false);
    setUserSodaSelection([]);
    setChangeCoins([]);
    setInventory(sodas);
  };

  const resetCoins = () => {
    setMachineCoins(coins);
    setNoCoinsError(false);
  };
  return (
    <Popper open={isOpen} anchorEl={anchorElement} placement="bottom-start">
      <Badge
        badgeContent={
          <span
            className={badgeStyles["badge-text"]}
            onClick={() => {
              setIsOpen(false);
              setAnchorElement(null);
            }}
          >
            x
          </span>
        }
        color="error"
      >
        <Box
          sx={{
            border: 1,
            p: 1,
            width: 400,
            bgcolor: "background.paper",
          }}
        >
          <div className={styles.menu}>
            <div
              className={styles.item}
              onClick={() => {
                resetInventory();
              }}
            >
              <Image
                className={styles["item-icon"]}
                src="/assets/reset.png"
                alt="coin"
                width={subMenuIconSize}
                height={subMenuIconSize}
              />
              <span className={styles["item-text"]}>
                {titles.resetInventory}
              </span>
            </div>
            <div
              className={styles.item}
              onClick={() => {
                resetCoins();
              }}
            >
              <Image
                className={styles["item-icon"]}
                src="/assets/coin.png"
                alt="book"
                width={subMenuIconSize}
                height={subMenuIconSize}
              />
              <span className={styles["item-text"]}>{titles.resetCoins}</span>
            </div>
          </div>
        </Box>
      </Badge>
    </Popper>
  );
};

Settings.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  anchorElement: PropTypes.object,
  setAnchorElement: PropTypes.func.isRequired,
};

export default Settings;
