import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductMysql } from '../../entities/product.entity.mysql';
import { ProductReader } from '../../interface/product/product-reader.interface';
import { Product } from '../../interface/product/product.interface';

@Injectable()
export class ProductMySQLRepository implements ProductReader {
  constructor(
    @InjectRepository(ProductMysql)
    private readonly repository: Repository<ProductMysql>,
  ) {}

  findById(id: string): Promise<Product | null> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
}
