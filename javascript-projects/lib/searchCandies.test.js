const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  // test cases
  it('searches for Ma and 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
  it('searches for Ma and 2', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });
  it('searches for S and 10', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });
  it('searches for S and 4', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });
});