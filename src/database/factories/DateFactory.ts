import { Dates } from "../../models/Dates";
import { Factory } from "./Factory";
import { faker } from "@faker-js/faker";

export class DateFactory extends Factory<Dates> {
    protected generate(): Dates {
        return{
            appointmentDate: faker.date.future()
        } as Dates;
      }
    }