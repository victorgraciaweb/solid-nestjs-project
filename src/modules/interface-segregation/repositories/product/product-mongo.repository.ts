import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  PRODUCT_MONGO_MODEL_NAME,
  ProductMongo,
} from '../../entities/product.entity.mongo';
import { ProductRepository } from '../../interface/product/product-repository.interface';
import { Product } from '../../interface/product/product.interface';

@Injectable()
export class ProductMongoRepository implements ProductRepository {
  constructor(
    @InjectModel(PRODUCT_MONGO_MODEL_NAME)
    private readonly productModel: Model<ProductMongo>,
  ) {}

  findById(id: string): Promise<Product | null> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  create(product: Product): Promise<Product> {
    throw new Error('Method not implemented.');
  }

  update(id: string, product: Partial<Product>): Promise<Product> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
