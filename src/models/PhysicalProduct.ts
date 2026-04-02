import { Product } from "./Product.js";

export class PhysicalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private weight: number
  ) {
    super(sku, name, price);
  }

  getPriceWithTax(): number {
    const taxRate = 0.1;
    return this.price + this.price * taxRate;
  }

  get formattedWeight(): string {
    return `${this.weight} kg`;
  }
}