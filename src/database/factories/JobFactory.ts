import { Job} from "../../models/Job";
import { Factory } from "./Factory";
import { faker } from "@faker-js/faker";

//------------------------------------------------------------------------------

export class JobFactory extends Factory<Job> {
    protected generate(): Job {
        return{
            jobs: faker.person.jobTitle(),
        } as Job;
      }
    }