import { DiscountStrategy } from '../../interface/discount/discount-strategy.interfaces';

export class FixedDiscount implements DiscountStrategy {
  constructor(private discountAmount: number) {}

  applyDiscount(price: number): number {
    return price - this.discountAmount;
  }
}
