import { SeederConfig } from "../../config/seeders"
import { jobController } from "../../controllers/jobControllers";
import { getRandomValueFromArray } from "../../helpers/common";
import { Job } from "../../models/Job";
import { TattoArtist } from "../../models/TattoArtist";
import { User } from "../../models/User";
import { TattoArtistFactory } from "../factories/TattoArtistFactory";
import { Seeder } from "./Seeders"

//------------------------------------------------------------------------------

export class tattoArtistSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const { MANAGER } = SeederConfig;

      const firstName = await TattoArtist.find();
      const lastName = await TattoArtist.find();
      const email = await TattoArtist.find();


      const tattos = new TattoArtistFactory().createMany(MANAGER);
      tattos.forEach((tatto) => {
         
      });

      await TattoArtist.save(tattos);
   }
};