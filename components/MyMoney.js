import { coins } from "/data/coins.js";
import { Popper, Box, Badge } from "@mui/material";
import PropTypes from "prop-types";
import Money from "./Money";
import styles from "/styles/MyMoney.module.css";

const MyMoney = ({
  total,
  setTotal,
  isOpen,
  setIsOpen,
  anchorElement,
  setAnchorElement,
}) => {
  const renderCoins = () => {
    return coins.map((coin) => {
      return (
        <Money
          key={coin.value}
          value={coin.value}
          total={total}
          setTotal={setTotal}
        />
      );
    });
  };

  return (
    <Popper open={isOpen} anchorEl={anchorElement} placement="auto-end">
      <Badge
        badgeContent={
          <span
            className={styles["badge-text"]}
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
            bgcolor: "background.paper",
            display: "flex",
          }}
        >
          {renderCoins()}
        </Box>
      </Badge>
    </Popper>
  );
};

MyMoney.propTypes = {
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  anchorElement: PropTypes.object,
  setAnchorElement: PropTypes.func.isRequired,
};

export default MyMoney;
