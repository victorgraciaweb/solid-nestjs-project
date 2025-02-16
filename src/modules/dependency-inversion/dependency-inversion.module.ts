import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product/product.controller';
import { ProductCreateService } from './services/product/product-create.service';

import {
  MONGO_PRODUCT_REPOSITORY,
  MYSQL_PRODUCT_REPOSITORY,
} from './constants/product.constants';
import { ProductMySQLRepository } from './repositories/product/product-mysql.repository';
import { ProductMongoRepository } from './repositories/product/product-mongo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductMysql } from './entities/product.entity.mysql';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PRODUCT_MONGO_MODEL_NAME,
  ProductMongoSchema,
} from './entities/product.entity.mongo';
import { ProductMongo } from './entities/product.entity.mongo';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PRODUCT_MONGO_MODEL_NAME, schema: ProductMongoSchema },
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'my_database',
      entities: [ProductMysql],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProductMysql]),
  ],
  controllers: [ProductController],
  providers: [
    ProductCreateService,
    {
      provide: MYSQL_PRODUCT_REPOSITORY,
      useClass: ProductMySQLRepository,
    },
    {
      provide: MONGO_PRODUCT_REPOSITORY,
      useClass: ProductMongoRepository,
    },
  ],
})
export class DependencyInversionModule {}
