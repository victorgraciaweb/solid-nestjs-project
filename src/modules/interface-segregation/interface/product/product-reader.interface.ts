import { Product } from './product.interface';

export interface ProductReader {
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
}
