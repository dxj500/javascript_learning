const Candy = require("./candy");
// const candy = require("./candy");

describe("Candy", () => {
  // test cases
  const candy = new Candy("Mars", 4.99);
  it("name of candy is Mars", () => {
    expect(candy.getName()).toBe("Mars");
  });

  it("price of candy is 4.99", () => {
    expect(candy.getPrice()).toBe(4.99);
  });
});
