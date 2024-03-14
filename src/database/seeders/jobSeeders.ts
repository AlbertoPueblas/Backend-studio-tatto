import { SeederConfig } from "../../config/seeders";
import { getRandomValueFromArray } from "../../helpers/common";
import { Job } from "../../models/Job";
import { TattoArtist } from "../../models/TattoArtist";
import { JobFactory } from "../factories/JobFactory";
import { Seeder } from "./Seeders";


export class jobSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const { JOBS } = SeederConfig;

      const tattoArtist = await TattoArtist.find();

      const job = new JobFactory().createMany(JOBS);
      job.forEach((job) => {
         job.tattoArtist = getRandomValueFromArray(tattoArtist);
      });

      await Job.save(job);
   }
}
