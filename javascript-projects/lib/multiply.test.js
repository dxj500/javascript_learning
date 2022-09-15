const multiply = require('./multiply');

describe('multiply', () => {
  // test cases
  it('multiplies 3 and 3', () => {
    expect(multiply(3, 3)).toBe(9);
  });
});

