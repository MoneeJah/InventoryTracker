export class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `SKU: ${this.sku} | Name: ${this.name} | Price: $${this.price}`;
    }
    getPriceWithTax() {
        const taxRate = 0.1;
        return this.price + this.price * taxRate;
    }
}
//# sourceMappingURL=Product.js.map