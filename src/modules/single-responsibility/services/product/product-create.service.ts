import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { ProductRepository } from '../../repositories/product/product.repository';

@Injectable()
export class ProductCreateService {
  constructor(private readonly productRepository: ProductRepository) {}

  create(createProductDto: CreateProductDto) {
    if (!createProductDto.name || createProductDto.price <= 0) {
      throw new Error('Invalid product data');
    }

    return this.productRepository.create(createProductDto);
  }
}
