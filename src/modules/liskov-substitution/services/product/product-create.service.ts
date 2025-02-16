import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dto/product/create-product.dto';

@Injectable()
export class ProductCreateService {
  constructor() {}

  async create(createProductDto: CreateProductDto) {
    return createProductDto;
  }
}
