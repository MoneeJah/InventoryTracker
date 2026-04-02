import { Product } from "./Product.ts";

export interface DiscountableProduct {
  applyDiscount(percent: number): void;
}