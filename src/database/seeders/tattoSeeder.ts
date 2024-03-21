import { SeederConfig } from "../../config/seeders"
import { jobController } from "../../controllers/jobControllers";
import { getRandomValueFromArray } from "../../helpers/common";
import { Job } from "../../models/Job";
import { TattoArtist } from "../../models/TattoArtist";
import { User } from "../../models/User";
import { TattoArtistFactory } from "../factories/ArtistFactory";
import { Seeder } from "./Seeders"

//------------------------------------------------------------------------------

export class tattoArtistSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const { MANAGER } = SeederConfig;

      const users = await User.find();
      const job = await TattoArtist.find();

      const newDate = new TattoArtistFactory().createMany(MANAGER);
      newDate.forEach(() => {
         // tatto.jobs = getRandomValueFromArray(job) as TattoArtist;
         // tatto.email = getRandomValueFromArray(users) as User;
      });

      await TattoArtist.save(newDate);
   }
};