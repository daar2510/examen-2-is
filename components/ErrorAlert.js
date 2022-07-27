import { Alert } from "@mui/material";
import styles from "/styles/ErrorAlert.module.css";
import PropTypes from "prop-types";

const ErrorAlert = ({ error, isVisible}) => {
  return (
    <div className={`${styles.alert} ${isVisible ? styles.visible : styles.invisible}`}>
      <Alert severity="error">{error}</Alert>
    </div>
  );
};

ErrorAlert.propTypes = {
  error: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ErrorAlert;
