import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { MYSQL_PRODUCT_REPOSITORY } from '../../constants/product.constants';
import { ProductRepository } from '../../interface/product/product-repository.interface';
import { ProductMysql } from '../../entities/product.entity.mysql';

@Injectable()
export class ProductCreateService {
  constructor(
    @Inject(MYSQL_PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository<ProductMysql>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = new ProductMysql();
    product.name = createProductDto.name;
    product.description = createProductDto.description;
    product.price = createProductDto.price;

    return await this.productRepository.create(product);
  }
}
