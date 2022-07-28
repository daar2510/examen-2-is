import { useContext, useState, createContext } from "react";
import PropTypes from "prop-types";
import { sodas } from "/data/sodas";
import { coins } from "/data/coins";

const MachineContext = createContext();

export const useMachineContext = () => useContext(MachineContext);

const MachineContextProvider = ({ children }) => {
  const [isZoomEnabled, setIsZoomEnabled] = useState(false);
  const [inventory, setInventory] = useState(sodas);
  const [hasPurchaseStarted, setHasPurchaseStarted] = useState(false);
  const [userSodaSelection, setUserSodaSelection] = useState([]);
  const [quantityError, setQuantityError] = useState(false);
  const [noCoinsError, setNoCoinsError] = useState(false);
  const [noChangeError, setNoChangeError] = useState(false);
  const [machineCoins, setMachineCoins] = useState(coins);
  const [changeCoins, setChangeCoins] = useState([]);
  const [total, setTotal] = useState(1);

  const machineContext = {
    isZoomEnabled,
    setIsZoomEnabled,
    inventory,
    setInventory,
    hasPurchaseStarted,
    setHasPurchaseStarted,
    userSodaSelection,
    setUserSodaSelection,
    quantityError,
    setQuantityError,
    noCoinsError,
    setNoCoinsError,
    noChangeError,
    setNoChangeError,
    machineCoins,
    setMachineCoins,
    changeCoins,
    setChangeCoins,
    total,
    setTotal,
  };

  return (
    <MachineContext.Provider value={machineContext}>
      {children}
    </MachineContext.Provider>
  );
};

MachineContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MachineContextProvider;
