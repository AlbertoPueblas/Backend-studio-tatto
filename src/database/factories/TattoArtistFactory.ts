import { TattoArtist } from "../../models/TattoArtist";
import { Factory } from "./Factory";
import { faker } from "@faker-js/faker";

//------------------------------------------------------------------------------

export class TattoArtistFactory extends Factory<TattoArtist> {
    static() {
       throw new Error("Method not implemented.");
    }
    protected generate(): TattoArtist {
        return{
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
        } as TattoArtist;
      }
    }