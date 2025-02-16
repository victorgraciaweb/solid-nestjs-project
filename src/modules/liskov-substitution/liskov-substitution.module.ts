import { Module } from '@nestjs/common';
import { ProductService } from './services/product/product-create.service';

@Module({
  controllers: [],
  providers: [ProductService],
})
export class LiskovSubstitutionModule {}
