import { Model, Schema as MongooseSchema } from 'mongoose';
import { PersonDocument } from './person.model';
import { CreatePersonInput, ListPersonInput, UpdatePersonInput } from './person.inputs';
export declare class PersonService {
    private personModel;
    constructor(personModel: Model<PersonDocument>);
    create(payload: CreatePersonInput): Promise<PersonDocument>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<PersonDocument>;
    list(filters: ListPersonInput): Promise<PersonDocument[]>;
    update(payload: UpdatePersonInput): Promise<PersonDocument>;
    delete(_id: MongooseSchema.Types.ObjectId): Promise<PersonDocument>;
}
