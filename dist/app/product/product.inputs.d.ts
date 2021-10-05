import { Schema as MongooseSchema } from 'mongoose';
export declare class ListProductInput {
    _id: MongooseSchema.Types.ObjectId;
    brand: string;
    description: string;
    price: number;
}
