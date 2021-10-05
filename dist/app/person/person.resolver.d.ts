import { Schema as MongooseSchema } from 'mongoose';
import { PersonDocument } from './person.model';
import { PersonService } from './person.service';
import { CreatePersonInput, ListPersonInput, UpdatePersonInput } from './person.inputs';
import { Hobby } from '../hobby/hobby.model';
export declare class PersonResolver {
    private personService;
    constructor(personService: PersonService);
    person(_id: MongooseSchema.Types.ObjectId): Promise<PersonDocument>;
    persons(filters?: ListPersonInput): Promise<PersonDocument[]>;
    createPerson(payload: CreatePersonInput): Promise<PersonDocument>;
    updatePerson(payload: UpdatePersonInput): Promise<PersonDocument>;
    deletePerson(_id: MongooseSchema.Types.ObjectId): Promise<PersonDocument>;
    hobbies(person: PersonDocument, populate: boolean): Promise<MongooseSchema.Types.ObjectId[] | Hobby[]>;
}
