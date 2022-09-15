const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  // test cases
  it('given 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it('given 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it('given 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  });
  it('given 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  it('given 18', () => {
    expect(fizzBuzz(18)).toBe('Fizz');
  });
  it('given 20', () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });
});