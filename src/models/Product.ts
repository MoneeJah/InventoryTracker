export class Product {
  constructor(
    public sku: string,
    public name: string,
    protected price: number
  ) {}

  displayDetails(): string {
    return `SKU: ${this.sku} | Name: ${this.name} | Price: $${this.price}`;
  }

  getPriceWithTax(): number {
    const taxRate = 0.1;
    return this.price + this.price * taxRate;
  }
}