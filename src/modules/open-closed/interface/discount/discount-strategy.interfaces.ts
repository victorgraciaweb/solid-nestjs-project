export interface DiscountStrategy {
  applyDiscount(price: number): number;
}
