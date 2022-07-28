import {
  calculatePrice,
  calculateTotal,
  addSodaToCurrentSelection,
  insertCoin,
  updateInventory,
  calculateChangeCoins,
  sumAllCoins,
} from "../logic/soda";

// mock structuredClone as it is not available in jest
global.structuredClone = jest.fn((val) => {
  return JSON.parse(JSON.stringify(val));
});

describe("calculatePrice", () => {
  it("should return the price of a soda selection", () => {
    expect(calculatePrice("pepsi", 4)).toEqual(2400);
  });
});
describe("calculateTotal", () => {
  it("should return the total amount to pay for the user selection", () => {
    expect(
      calculateTotal([
        { soda: "pepsi", quantity: 4 },
        { soda: "fanta", quantity: 1 },
      ])
    ).toEqual(2950);
  });
});
describe("addSodaToCurrentSelection", () => {
  it("should add a soda to the current selection", () => {
    expect(
      addSodaToCurrentSelection([{ soda: "pepsi", quantity: 4 }], "coca-cola")
    ).toEqual([
      { soda: "pepsi", quantity: 4 },
      { soda: "coca-cola", quantity: 1 },
    ]);
  });
});
describe("insertCoin", () => {
  it("should return the remaining amount to pay", () => {
    expect(insertCoin(2950, 100)).toEqual(2850);
  });
});
describe("updateInventory", () => {
  it("should update the inventory", () => {
    expect(
      updateInventory(
        [
          { name: "pepsi", quantity: 10 },
          { name: "fanta", quantity: 10 },
        ],
        [
          { soda: "pepsi", quantity: 4 },
          { soda: "fanta", quantity: 1 },
        ]
      )
    ).toEqual([
      { name: "pepsi", quantity: 6 },
      { name: "fanta", quantity: 9 },
    ]);
  });
});
describe("calculateChangeCoins", () => {
  it("should return the change coins", () => {
    expect(
      calculateChangeCoins(975, [
        { value: 1000, quantity: 0 },
        { value: 500, quantity: 30 },
        { value: 100, quantity: 30 },
        { value: 50, quantity: 30 },
        { value: 25, quantity: 30 },
      ])
    ).toEqual({
      change: [
        { value: 500, quantity: 1 },
        { value: 100, quantity: 4 },
        { value: 50, quantity: 1 },
        { value: 25, quantity: 1 },
      ],
      remainingAmountToReturn: 0,
      remainingCoins: [
        { value: 1000, quantity: 0 },
        { value: 500, quantity: 29 },
        { value: 100, quantity: 26 },
        { value: 50, quantity: 29 },
        { value: 25, quantity: 29 },
      ],
    });
  });
});
describe("sumAllCoins", () => {
  it("should return the sum of all coins", () => {
    expect(
      sumAllCoins([
        { value: 500, quantity: 1 },
        { value: 100, quantity: 4 },
        { value: 50, quantity: 1 },
        { value: 25, quantity: 1 },
      ])
    ).toEqual(975);
  });
});
