import { Product } from "./Product.js";
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    getPriceWithTax() {
        const taxRate = 0.1;
        return this.price + this.price * taxRate;
    }
    get formattedWeight() {
        return `${this.weight} kg`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map