import { Product } from "../models/Product";

// Utility function to calculate tax
export function calculateTax(product: Product): number {
  return product.getPriceWithTax();
}
import { PhysicalProduct } from "../models/PhysicalProduct";
import { DigitalProduct } from "../models/DigitalProduct";
import { calculateTax } from "./taxCalculator";

const book = new PhysicalProduct("SKU1", "Book", 30, 1.2);
const course = new DigitalProduct("SKU2", "Online Course", 100, 1500);

console.log(calculateTax(book));   // includes tax
console.log(calculateTax(course)); // no tax