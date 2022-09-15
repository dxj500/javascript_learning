const Candy = require('./candy');

class ShoppingBasket {
  constructor(basket) {
    this.basket = basket;
  }

  addItem() {
    const candy = new Candy();
    return this.basket.candy;
  }
  
  getTotalPrice() {
    const total = this.basket.getPrice();
    return total;
  }

}

module.exports = ShoppingBasket;