import { Popper, Box, Badge } from "@mui/material";
import PropTypes from "prop-types";
import styles from "/styles/MyMoney.module.css";
import { tutorial } from "../constants/text";

const Tutorial = ({ isOpen, setIsOpen, anchorElement, setAnchorElement }) => {
  return (
    <Popper open={isOpen} anchorEl={anchorElement} placement="bottom-start">
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
            width: 400,
            bgcolor: "background.paper",
          }}
        >
          {tutorial.map((text, index) => (
            <div key={index}>
              <p className={text === tutorial[1] ? styles.highlighted : ""}>
                {text}
              </p>
              <br />
            </div>
          ))}
        </Box>
      </Badge>
    </Popper>
  );
};

Tutorial.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  anchorElement: PropTypes.object,
  setAnchorElement: PropTypes.func.isRequired,
};

export default Tutorial;
