import { Document, Schema as MongooseSchema } from 'mongoose';
export declare class Product {
    _id: MongooseSchema.Types.ObjectId;
    brand: string;
    description: string;
    price: number;
}
export declare type ProductDocument = Product & Document;
export declare const ProductSchema: MongooseSchema<any>;
