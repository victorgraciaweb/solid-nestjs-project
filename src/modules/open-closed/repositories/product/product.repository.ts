import { Injectable } from '@nestjs/common';
import { Product } from '../../interface/product/product.interface';

@Injectable()
export class ProductRepository {
  private products: Product[] = [
    { id: '1', name: 'Laptop', price: 1000, description: 'High-end laptop' },
    { id: '2', name: 'Phone', price: 500, description: 'Latest smartphone' },
    { id: '3', name: 'Tablet', price: 300, description: 'Portable tablet' },
  ];

  findById(id: string): Product | null {
    return this.products.find((product) => product.id === id) || null;
  }
}
