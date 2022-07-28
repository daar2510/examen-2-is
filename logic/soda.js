import { sodas } from "../data/sodas";

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
  const newUserSodaSelection = structuredClone(userSodaSelection);
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

export const insertCoin = (totalToPay, coin) => {
  return totalToPay - coin;
};

export const updateInventory = (inventory, boughtItems) => {
  const newInventory = structuredClone(inventory);
  boughtItems.forEach((boughtItem) => {
    const index = newInventory.findIndex((inventorySoda) => {
      return inventorySoda.name === boughtItem.soda;
    });
    newInventory[index].quantity -= boughtItem.quantity;
  });
  return newInventory;
};

export const calculateChangeCoins = (amountToReturn, availableCoins) => {
  const changeCoins = [];
  const remainingCoins = structuredClone(availableCoins);
  let remainingAmountToReturn = amountToReturn;
  remainingCoins.forEach((coin) => {
    while (remainingAmountToReturn >= coin.value && coin.quantity > 0) {
      const index = changeCoins.findIndex((changeCoin) => {
        return changeCoin.value === coin.value;
      });
      if (index !== -1) {
        changeCoins[index].quantity++;
      } else {
        changeCoins.push({ value: coin.value, quantity: 1 });
      }
      remainingAmountToReturn -= coin.value;
      coin.quantity--;
    }
  });
  return { change: changeCoins, remainingAmountToReturn, remainingCoins };
};

export const sumAllCoins = (coins) => {
  return coins.reduce((total, coin) => {
    return total + coin.value * coin.quantity;
  }, 0);
};
