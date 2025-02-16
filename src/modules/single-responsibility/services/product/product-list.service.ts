import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../repositories/product/product.repository';

@Injectable()
export class ProductListService {
  constructor(private readonly productRepository: ProductRepository) {}

  findAll() {
    return this.productRepository.findAll();
  }
}
