import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { Product } from '../../interface/product/product.interface';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];

  create(createProductDto: CreateProductDto): Product {
    const newProduct: Product = {
      id: this.products.length + 1,
      ...createProductDto,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }
}
