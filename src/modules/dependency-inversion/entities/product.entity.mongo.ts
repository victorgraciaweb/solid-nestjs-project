import { Schema, Document } from 'mongoose';

export const PRODUCT_MONGO_MODEL_NAME = 'ProductMongo';

export const ProductMongoSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: 'products' },
);

export interface ProductMongo extends Document {
  name: string;
  description: string;
  price: number;
  createdAt: Date;
}
