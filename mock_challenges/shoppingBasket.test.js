
const Candy = require("./candy");
const ShoppingBasket = require("./shoppingBasket");

describe("ShoppingBasket", () => {
  // test cases
  const basket = new ShoppingBasket();
  it("returns the price of an empty basket", () => {
    expect(basket.getTotalPrice()).toBe(0);
  });
  
  it('return a basket with total value of 3.99', () => {
    const basket = new ShoppingBasket();
    basket.addItem(new Candy('Skittle', 3.99));
    expect(basket.getTotalPrice()).toEqual(3.99);
  })

  it('return a basket with total value of 3.99', () => {
    const basket = new ShoppingBasket();
    // const basket1 = new ShoppingBasket();
    basket.addItem(new Candy('Skittle', 3.99));
    basket.addItem(new Candy('Skittle', 3.99));
    expect(basket.getTotalPrice()).toEqual(7.98);
  })
});
