import { Job} from "../../models/Job";
import { Factory } from "./Factory";
import { faker } from "@faker-js/faker";

//------------------------------------------------------------------------------

export class JobFactory extends Factory<Job> {
    protected generate(): Job {
        return{
            jobs: faker.lorem.sentence({min:1 , max:3}),
        } as Job;
      }
    }