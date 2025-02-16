import { ProductReader } from './product-reader.interface';
import { ProductWriter } from './product-writer.interface';

export interface ProductRepository extends ProductReader, ProductWriter {}
