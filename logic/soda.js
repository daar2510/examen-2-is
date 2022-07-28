import { sodas } from "/data/sodas";

export const calculatePrice = (sodaName, quantity) => {
  const soda = sodas.find((soda) => soda.name === sodaName);
  return soda.price * quantity;
};

export const calculateTotal = (userSodaSelection) => {
  return userSodaSelection.reduce((total, selection) => {
    return total + calculatePrice(selection.soda, selection.quantity);
  }, 0);
};

export const addSodaToCurrentSelection = (userSodaSelection, sodaToAdd) => {
  const newUserSodaSelection = [...userSodaSelection];
  const index = newUserSodaSelection.findIndex(
    (selection) => selection.soda === sodaToAdd
  );
  if (newUserSodaSelection.length === 0 || index === -1) {
    newUserSodaSelection.push({ soda: sodaToAdd, quantity: 1 });
  } else {
    newUserSodaSelection[index].quantity++;
  }
  return newUserSodaSelection;
};
