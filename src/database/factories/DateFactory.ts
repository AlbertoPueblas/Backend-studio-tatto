import { Dates } from "../../models/Dates";
import { Factory } from "./Factory";
import { faker } from "@faker-js/faker";

export class DateFactory extends Factory<Dates> {
    protected generate(): Dates {
        return{
            dayDate: faker.number.int(),
            hourDate: faker.number.int(),
            confirmDay: faker.number.int(),
            userId: faker.number.int(),
            jobsId: faker.number.int()
        } as Dates;
      }
    }