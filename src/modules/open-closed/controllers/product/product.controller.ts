import { Controller, Get, Param } from '@nestjs/common';
import { ProductPriceService } from '../../services/product/product-price.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productPriceService: ProductPriceService) {}

  @Get(':id/price')
  getProductPrice(@Param('id') productId: string) {
    return this.productPriceService.getProductPrice(productId);
  }
}
