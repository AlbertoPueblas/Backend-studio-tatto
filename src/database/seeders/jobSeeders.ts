import { SeederConfig } from "../../config/seeders";
import { getRandomValueFromArray } from "../../helpers/common";
import { Job } from "../../models/Job";
import { TattoArtist } from "../../models/TattoArtist";
import { JobFactory } from "../factories/JobFactory";
import { Seeder } from "./Seeders";

//------------------------------------------------------------------------------

export class jobSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const { JOBS } = SeederConfig;

      const tattoArtists = await TattoArtist.find();

      const jobs = new JobFactory().createMany(JOBS);
      jobs.forEach((job) => {
         job.tattoArtist = getRandomValueFromArray(tattoArtists);
         
      });

      await Job.save(jobs);
   }
}
