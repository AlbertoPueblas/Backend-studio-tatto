import { Dates } from "../../models/dates";
import { Factory } from "./Factory";
import { faker } from "@faker-js/faker";

//-----------------------------------------------------------------------------

export class DateFactory extends Factory<Dates> {
    protected generate(): Dates {
        return{
            appointmentDate: faker.date.future(),
            userId: faker.number.int(),
            jobId: faker.number.int(),
            tattoArtistId: faker.number.int()
        } as Dates;
      }
    }