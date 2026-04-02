import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";
const book = new PhysicalProduct("SKU1", "Book", 30, 1.2);
const course = new DigitalProduct("SKU2", "Online Course", 100, 1500);
console.log(calculateTax(book)); // includes tax
console.log(calculateTax(course)); // no tax
//# sourceMappingURL=main.js.map