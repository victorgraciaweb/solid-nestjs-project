import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repositories/product/product.repository';
import { DiscountStrategy } from '../../interface/discount/discount-strategy.interfaces';
import { DISCOUNT_STRATEGY_TOKEN } from '../../constants/discount-strategy.constants';

@Injectable()
export class ProductPriceService {
  constructor(
    private readonly productRepository: ProductRepository,
    @Inject(DISCOUNT_STRATEGY_TOKEN)
    private readonly discountStrategy: DiscountStrategy,
  ) {}

  async getProductPrice(productId: string): Promise<number> {
    const product = await this.productRepository.findById(productId);
    if (!product) throw new Error('Product not found');

    return this.discountStrategy.applyDiscount(product.price);
  }
}
