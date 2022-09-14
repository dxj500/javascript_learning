let counter = 0;

const increment = () => {
  
    console.log(counter);
    counter ++;
}

// setInterval(increment, 1000);
const setTimeDelay = (delay, transformFunction) => {
  setInterval(transformFunction, delay * 1000);
}

setTimeDelay(3, increment);


