import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export const PRODUCT_MONGO_MODEL_NAME = 'ProductMongo';

@Schema({ collection: 'products', timestamps: true })
export class ProductMongo extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, min: 0 })
  price: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ProductMongoSchema = SchemaFactory.createForClass(ProductMongo);
