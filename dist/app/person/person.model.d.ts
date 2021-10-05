import { Document, Schema as MongooseSchema } from 'mongoose';
import { Hobby } from '../hobby/hobby.model';
export declare class Person {
    _id: MongooseSchema.Types.ObjectId;
    name: string;
    hobbies: MongooseSchema.Types.ObjectId[] | Hobby[];
}
export declare type PersonDocument = Person & Document;
export declare const PersonSchema: MongooseSchema<any>;
