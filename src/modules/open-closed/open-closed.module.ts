import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product/product.controller';
import { ProductPriceService } from './services/product/product-price.service';
import { ProductRepository } from './repositories/product/product.repository';
import { ProductFindService } from './services/product/product-find.service';
import { FixedDiscount } from './services/discount/fixed-discount';
import { DISCOUNT_STRATEGY_TOKEN } from './constants/discount-strategy.constants';

@Module({
  controllers: [ProductController],
  providers: [
    ProductPriceService,
    ProductFindService,
    ProductRepository,
    {
      provide: DISCOUNT_STRATEGY_TOKEN,
      useClass: FixedDiscount,
    },
  ],
})
export class OpenClosedModule {}
