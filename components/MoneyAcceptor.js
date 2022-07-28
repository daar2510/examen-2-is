import styles from "/styles/MoneyAcceptor.module.css";
import { useMachineContext } from "./MachineContextProvider";
import { useEffect } from "react";
import { calculateChangeCoins } from "/logic/soda";
import { noChangeErrorTimeout } from "/constants/time";
import Image from "next/image";
import { coinPileHeight, coinPileWidth } from "../constants/size";

const MoneyAcceptor = () => {
  const { changeCoins, setChangeCoins } = useMachineContext();
  const { machineCoins, setMachineCoins } = useMachineContext();
  const { setHasPurchaseStarted, setAreSodasDispensed, setUserSodaSelection } =
    useMachineContext();
  const { total, setTotal } = useMachineContext();
  const { setNoChangeError } = useMachineContext();

  useEffect(() => {
    if (total < 0) {
      const { change, remaingAmountToReturn, remainingCoins } =
        calculateChangeCoins(-total, machineCoins);
      if (remaingAmountToReturn > 0) {
        setNoChangeError(true);
        setAreSodasDispensed(false);
        setHasPurchaseStarted(false);
        setUserSodaSelection([]);
        setTotal(0);

        setTimeout(() => {
          setNoChangeError(false);
        }, noChangeErrorTimeout);
      } else {
        setChangeCoins(change);
        setMachineCoins(remainingCoins);
      }
    }
  }, [total]);

  return (
    <div className={styles.container}>
      <div className={styles["money-acceptor"]}>
        <div className={styles["bill-slot"]} />
      </div>
      <div className={styles["coin-slot"]}>
        {changeCoins.length > 0 && (
          <div className={styles["coin-pile"]}>
            <Image
              src="/assets/coin-pile.png"
              alt="coin pile"
              width={coinPileWidth}
              height={coinPileHeight}
              onClick={() => {
                setChangeCoins([]);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MoneyAcceptor;
