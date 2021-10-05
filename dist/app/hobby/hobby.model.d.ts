import { Document, Schema as MongooseSchema } from 'mongoose';
export declare class Hobby {
    _id: MongooseSchema.Types.ObjectId;
    name: string;
}
export declare type HobbyDocument = Hobby & Document;
export declare const HobbySchema: MongooseSchema<any>;
