import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { Product } from "./models/Product.js";

const products: Product[] = [
  new PhysicalProduct("SKU001", "Laptop", 1000, 2.5),
  new DigitalProduct("SKU002", "E-Book", 25, 500),
];

products.forEach((product) => {
  console.log(product.displayDetails());

  const finalPrice = product.getPriceWithTax();
  console.log(`Final Price (with tax): $${finalPrice}`);

  console.log("-----------------------------");
});