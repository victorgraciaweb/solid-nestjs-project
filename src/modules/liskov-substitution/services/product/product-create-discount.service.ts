import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { ProductCreateService } from './product-create.service';

@Injectable()
export class ProductCreateDiscountService extends ProductCreateService {
  constructor() {
    super();
  }

  async create(createProductDto: CreateProductDto) {
    const discountPercentage = 20;
    const discountedPrice = createProductDto.price - (createProductDto.price * discountPercentage) / 100;

    const discountedProduct = {
      ...createProductDto,
      price: discountedPrice,
      discount: discountPercentage,
    };

    console.log(`Created discounted product:`, discountedProduct);

    return discountedProduct;
  }
}