import { DiscountStrategy } from '../../interface/discount/discount-strategy.interfaces';

export class PercentageDiscount implements DiscountStrategy {
  constructor(private percentage: number) {}

  applyDiscount(price: number): number {
    return price - price * (this.percentage / 100);
  }
}
