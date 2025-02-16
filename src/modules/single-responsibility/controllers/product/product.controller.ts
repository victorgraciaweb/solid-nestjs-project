import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductCreateService } from '../../services/product/product-create.service';
import { ProductListService } from '../../services/product/product-list.service';
import { CreateProductDto } from '../../dto/product/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productCreateService: ProductCreateService,
    private readonly productListService: ProductListService,
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productCreateService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productListService.findAll();
  }
}
