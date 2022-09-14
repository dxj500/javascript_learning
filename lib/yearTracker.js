class YearTracker {

  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  isleapYear(num) {
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
}

let yearTracker = new YearTracker();
let years = [];
for (let count = this.start; count <= this.finish; count ++) {
  if (yearTracker.isleapYear(count) === true) {
    return years.concat(count);
  }
console.log(years);

}

module.exports = YearTracker;





