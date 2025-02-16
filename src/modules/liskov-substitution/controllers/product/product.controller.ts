import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { ProductCreateService } from '../../services/product/product-create.service';
import { ProductCreateDiscountService } from '../../services/product/product-create-discount.service';
import { ProductCreateVipService } from '../../services/product/product-create-vip.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productCreateService: ProductCreateService,
    private readonly productCreateDiscountService: ProductCreateDiscountService,
    private readonly productCreateVipService: ProductCreateVipService,
  ) {}

  @Post('create')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productCreateService.create(createProductDto);
  }

  @Post('create-discounted')
  createDiscountedProduct(@Body() createProductDto: CreateProductDto) {
    return this.productCreateDiscountService.create(createProductDto);
  }

  @Post('create-vip')
  createLuxuryProduct(@Body() createProductDto: CreateProductDto) {
    return this.productCreateVipService.create(createProductDto);
  }
}
