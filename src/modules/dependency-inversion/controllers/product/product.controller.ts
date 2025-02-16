import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { ProductCreateService } from '../../services/product/product-create.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productCreateService: ProductCreateService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productCreateService.create(createProductDto);
  }
}
