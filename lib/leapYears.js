const leapYears = (num) => {
  if (num % 400 === 0) {
    return true;
  }
  else if (num % 100 === 0 && num % 400 != 0) {
    return false;
  }
  else if (num % 4 === 0 && num % 100 != 0) {
    return true;
  }
  else if (num % 4 != 0) {
    return false;
  }
  else {
    return false;
  }
}

module.exports = leapYears;