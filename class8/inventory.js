// Product Inventory Management System

class Inventory {
    constructor() {
      this.products = {};
    }
  
    addProduct(name, quantity, price) {
      this.products[name] = { quantity, price };
      console.log(`Added ${quantity} units of ${name}`);
    }
  
  sellProduct(name, quantity) {
      if (!this.products[name]) {
        throw new Error(`Product ${name} not found`);
      }
      if (this.products[name].quantity < quantity) {
        throw new Error(`Insufficient stock for ${name}`);
      }

    this.products[name].quantity -= quantity; 
      return this.products[name].price * quantity;
    }
  
    getInventoryValue() {
      return Object.values(this.products).reduce((total, product) => {
        return total + (product.quantity * product.price);
      }, 0);
    }
  }
  
  const store = new Inventory();
  store.addProduct('Laptop', 10, 999);
  store.addProduct('Mouse', 50, 25);
  console.log('Total value:', store.getInventoryValue());
  console.log('Sale total:', store.sellProduct('Laptop', 2));
  console.log('Remaining value:', store.getInventoryValue());  // Value won't change!