import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductRepository } from '../../interface/product/product-repository.interface';
import { ProductMysql } from '../../entities/product.entity.mysql';
import { CreateProductDto } from '../../dto/product/create-product.dto';

@Injectable()
export class ProductMySQLRepository implements ProductRepository<ProductMysql> {
  constructor(
    @InjectRepository(ProductMysql)
    private readonly repository: Repository<ProductMysql>,
  ) {}

  create(data: CreateProductDto): Promise<ProductMysql> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<ProductMysql | null> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<ProductMysql[]> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}