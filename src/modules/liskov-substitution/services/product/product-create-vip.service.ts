import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { ProductCreateService } from './product-create.service';

@Injectable()
export class ProductCreateVipService extends ProductCreateService {
  constructor() {
    super();
  }

  async create(createProductDto: CreateProductDto) {
    const vipFee = 100;

    const vipProduct = {
      ...createProductDto,
      price: createProductDto.price + vipFee,
      vipFee, 
    };

    console.log(`Created VIP product:`, vipProduct);

    return vipProduct;
  }
}