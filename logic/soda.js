import { soda1, soda2, soda3, soda4 } from "../constants/inventory";
const sodaOptions = [soda1, soda2, soda3, soda4];

export const calculatePrice = (sodaName, quantity) => {
  const soda = sodaOptions.find((item) => item.soda === sodaName);
  return soda.price * quantity;
}

export const calculateTotal = (sodaSelection) => {
  return sodaSelection.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
}