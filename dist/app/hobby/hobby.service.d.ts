import { Model, Schema as MongooseSchema } from 'mongoose';
import { HobbyDocument } from './hobby.model';
import { CreateHobbyInput, ListHobbyInput, UpdateHobbyInput } from './hobby.inputs';
export declare class HobbyService {
    private hobbyModel;
    constructor(hobbyModel: Model<HobbyDocument>);
    create(payload: CreateHobbyInput): Promise<HobbyDocument>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<HobbyDocument>;
    list(filters: ListHobbyInput): Promise<HobbyDocument[]>;
    update(payload: UpdateHobbyInput): Promise<HobbyDocument>;
    delete(_id: MongooseSchema.Types.ObjectId): Promise<HobbyDocument>;
}
