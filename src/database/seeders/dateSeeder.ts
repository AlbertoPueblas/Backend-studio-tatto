import { SeederConfig } from "../../config/seeders";
import { getRandomValueFromArray } from "../../helpers/common";
import { Seeder } from "./Seeders";
import { User } from "../../models/User";
import { DateFactory } from "../factories/DateFactory";
import { Dates } from "../../models/dates";
import { Job } from "../../models/Job";
import { TattoArtist } from "../../models/TattoArtist";


export class dateSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const { DATES } = SeederConfig;

      const users = await User.find();
      const jobs = await Job.find();
      const tattoArtist = await TattoArtist.find();

      const dates = new DateFactory().createMany(DATES);
      dates.forEach((date) => {
         date.job = getRandomValueFromArray(jobs);
         date.user = getRandomValueFromArray(users);
         date.tattoArtist = getRandomValueFromArray(tattoArtist);
      });

      await Dates.save(dates);
   }
};
