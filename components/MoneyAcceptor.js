import styles from "/styles/MoneyAcceptor.module.css";
import { useMachineContext } from "./MachineContextProvider";
import { useEffect } from "react";
import { calculateChangeCoins } from "/logic/soda";
import { noChangeErrorTimeout } from "/constants/time";
import Image from "next/image";
import { coinPileHeight, coinPileWidth } from "../constants/size";
import { updateSodasDispensedTimeout } from "../constants/time";
import { sumAllCoins } from "../logic/soda";

const MoneyAcceptor = () => {
  const { changeCoins, setChangeCoins } = useMachineContext();
  const { machineCoins, setMachineCoins } = useMachineContext();
  const { setHasPurchaseStarted, setAreSodasDispensed, setUserSodaSelection } =
    useMachineContext();
  const { total, setTotal } = useMachineContext();
  const { setNoChangeError, setNoCoinsError } = useMachineContext();

  useEffect(() => {
    if (total < 0) {
      const { change, remainingAmountToReturn, remainingCoins } =
        calculateChangeCoins(-total, machineCoins);
      if (remainingAmountToReturn > 0) {
        setTimeout(() => {
          setNoChangeError(true);
          setChangeCoins([]);
          setAreSodasDispensed(false);
          setHasPurchaseStarted(false);
          setUserSodaSelection([]);
        }, updateSodasDispensedTimeout);

        setTimeout(() => {
          setNoChangeError(false);
        }, noChangeErrorTimeout);
      } else if (sumAllCoins(remainingCoins) === 0) {
        setNoCoinsError(true);
        setChangeCoins(change);
        setMachineCoins(remainingCoins);
      } else {
        setChangeCoins(change);
        setMachineCoins(remainingCoins);
      }
      setTotal(0);
    }
  }, [
    total,
    machineCoins,
    setTotal,
    setMachineCoins,
    setNoChangeError,
    setAreSodasDispensed,
    setHasPurchaseStarted,
    setUserSodaSelection,
    setChangeCoins,
    setNoCoinsError,
  ]);

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
