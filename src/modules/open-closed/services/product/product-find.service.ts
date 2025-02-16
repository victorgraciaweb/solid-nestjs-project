import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../repositories/product/product.repository';
import { Product } from '../../interface/product/product.interface';

@Injectable()
export class ProductFindService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findById(productId: string): Promise<Product> {
    const product = await this.productRepository.findById(productId);
    if (!product)
      throw new NotFoundException(`Product with ID ${productId} not found`);

    return product;
  }
}
