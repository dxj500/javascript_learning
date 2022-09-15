const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  // test cases
  it('searches for Ma and 10', () => {
    expect(searchCandies('Ma', 10)).toBe([ 'Mars', 'Maltesers' ]);
  });
  it('searches for Ma and 2', () => {
    expect(searchCandies('Ma', 2)).toBe(['Mars']);
  });
  it('searches for S and 10', () => {
    expect(searchCandies('S', 10)).toBe(['Skitties', 'Skittles', 'Starburst']);
  });
  it('searches for S and 4', () => {
    expect(searchCandies('S', 4)).toBe(['Skitties', 'Skittles']);
  });
});