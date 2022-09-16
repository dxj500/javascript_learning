const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const searchCandies = (prefix, maxPrice) => {
  const sweets = candies.filter((element) => element.name.includes(prefix) === true);
  // console.log(sweets);

  return sweets.filter((prices) => prices.price < maxPrice).map((sweets) => sweets.name);
};


module.exports = searchCandies;

// searchCandies('Ma', 10);

// const searchCandies = (array) => {
//   newarray = (array.map((element) => (element)));
//   console.log(newarray)

//   const result = newarray.filter((element) => element.name.includes('Ma') == true)
  
//     pricesarr = []
//   prices = result.forEach(element2 => (pricesarr.push(element2.price)));
  
//   sum = 0
//  for (let i = 0; i < pricesarr.length; i++) {
//   sum += pricesarr[i];
//   console.log(sum)
// }
//   };




// searchCandies(candies);
// console.log(searchCandies)



 