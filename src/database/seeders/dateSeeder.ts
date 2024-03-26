import { SeederConfig } from "../../config/seeders";
import { getRandomValueFromArray, getUsersAccordingRole } from "../../helpers/common";
import { Seeder } from "./Seeders";
import { User } from "../../models/User";
import { DateFactory } from "../factories/DateFactory";
import { Dates } from "../../models/dates";
import { Job } from "../../models/Job";


//------------------------------------------------------------------------------

export class dateSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const { DATES } = SeederConfig;

      const users = await User.find();
      const jobs = await Job.find();

      const artists=getUsersAccordingRole(users,2);
        const clients=getUsersAccordingRole(users,3);

      const dates = new DateFactory().createMany(DATES);

      dates.forEach((date) => {
         date.job = getRandomValueFromArray(jobs);
         date.client = getRandomValueFromArray(clients);
         date.artist = getRandomValueFromArray(artists);

      });

      await Dates.save(dates);
   }
};
