import { Alert } from "@mui/material";
import styles from "/styles/ErrorAlert.module.css";
import { useMachineContext } from "./MachineContextProvider";
import { useEffect, useState } from "react";
import { titles } from "/constants/text";

const ErrorAlert = () => {
  const { quantityError, noChangeError } = useMachineContext();
  const [currentError, setCurrentError] = useState(null);

  useEffect(() => {
    if (quantityError) {
      setCurrentError(titles.quantityError);
    } else if (noChangeError) {
      setCurrentError(titles.noChangeError);
    }
  }, [quantityError, noChangeError]);

  return (
    <div
      className={`${styles.alert} ${
        quantityError || noChangeError ? styles.visible : styles.invisible
      }`}
    >
      <Alert severity="error">{currentError}</Alert>
    </div>
  );
};

export default ErrorAlert;
