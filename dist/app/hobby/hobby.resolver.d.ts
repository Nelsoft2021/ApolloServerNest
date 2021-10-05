import { Schema as MongooseSchema } from 'mongoose';
import { HobbyService } from './hobby.service';
import { CreateHobbyInput, ListHobbyInput, UpdateHobbyInput } from './hobby.inputs';
export declare class HobbyResolver {
    private hobbyService;
    constructor(hobbyService: HobbyService);
    hobby(_id: MongooseSchema.Types.ObjectId): Promise<import("./hobby.model").HobbyDocument>;
    hobbies(filters?: ListHobbyInput): Promise<import("./hobby.model").HobbyDocument[]>;
    createHobby(payload: CreateHobbyInput): Promise<import("./hobby.model").HobbyDocument>;
    updateHobby(payload: UpdateHobbyInput): Promise<import("./hobby.model").HobbyDocument>;
    deleteHobby(_id: MongooseSchema.Types.ObjectId): Promise<import("./hobby.model").HobbyDocument>;
}
