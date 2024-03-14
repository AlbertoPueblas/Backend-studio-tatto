import { SeederConfig } from "../../config/seeders";
import { getRandomValueFromArray } from "../../helpers/common";
import { Seeder } from "./Seeders";
import { TattoArtist } from "../../models/TattoArtist";
import { User } from "../../models/User";
import { DateFactory } from "../factories/dateFactory";
import { Dates } from "../../models/Dates";


export class dateSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const { DATES } = SeederConfig;

      const users = await User.find();
      const tattoArtist= await TattoArtist.find();

      const dates = new DateFactory().createMany(DATES);
      dates.forEach(() => {
         return Dates.user = getRandomValueFromArray(users);
      });

      await Dates.save(dates);
   }
};
