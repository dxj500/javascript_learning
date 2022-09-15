const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.totalprice = 0;
  }

  addItem(sweet) {
    this.totalprice += sweet.price;
  }

  getTotalPrice() {
    return this.totalprice;
  }

}

module.exports = ShoppingBasket;