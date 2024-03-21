import { TattoArtist } from "../../models/TattoArtist";
import { Factory } from "./Factory";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

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
            password: bcrypt.hashSync("12345678", 10),

        } as TattoArtist;
      }
    }