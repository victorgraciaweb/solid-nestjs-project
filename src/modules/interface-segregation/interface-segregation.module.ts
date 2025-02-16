import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from './services/product/product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class InterfaceSegregationModule {}
