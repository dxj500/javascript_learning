const addToBatch = (arr, number) => {
  if (arr.length >= 5) {
    console.log(arr);
  }
  else {
    console.log(arr.concat(number));
  }
};

addToBatch([1], 3);

