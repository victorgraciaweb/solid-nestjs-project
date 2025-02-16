import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductRepository } from '../../interface/product/product-repository.interface';
import {
  PRODUCT_MONGO_MODEL_NAME,
  ProductMongo,
} from '../../entities/product.entity.mongo';

@Injectable()
export class ProductMongoRepository implements ProductRepository<ProductMongo> {
  constructor(
    @InjectModel(PRODUCT_MONGO_MODEL_NAME)
    private readonly productModel: Model<ProductMongo>,
  ) {}

  create(product: ProductMongo): Promise<ProductMongo> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<ProductMongo | null> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<ProductMongo[]> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
