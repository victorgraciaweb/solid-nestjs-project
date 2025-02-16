import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product/product.controller';
import { ProductCreateService } from './services/product/product-create.service';
import { ProductListService } from './services/product/product-list.service';
import { ProductRepository } from './repositories/product/product.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductCreateService, ProductListService, ProductRepository],
})
export class SingleResponsibilityModule {}
