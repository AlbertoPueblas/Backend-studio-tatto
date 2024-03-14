import { TattoArtist } from "../../models/TattoArtist";
import { Factory } from "./Factory";
import { faker } from "@faker-js/faker";

export class TattoArtistFactory extends Factory<TattoArtist> {
    protected generate(): TattoArtist {
        return{
            firstName: faker.person.firstName(),
            email: faker.internet.email(),
        } as TattoArtist;
      }
    }