import { SeederConfig } from "../../config/seeders";
import { getRandomValueFromArray } from "../../helpers/common";
import { Job } from "../../models/Job";
import { JobFactory } from "../factories/JobFactory";
import { Seeder } from "./Seeders";

//------------------------------------------------------------------------------

export class jobSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const { JOBS } = SeederConfig;

      const jobs = new JobFactory().createMany(JOBS);

      await Job.save(jobs);
   }
}
