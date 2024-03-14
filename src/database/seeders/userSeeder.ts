import { SeederConfig } from "../../config/seeders"
import { Dates } from "../../models/Dates";
import { UserFactory } from "../factories/UserFactory";
import { Seeder } from "./Seeders"

export class UserSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const { ADMINS, ARTIST, USERS, DATES } =
      SeederConfig;

      const usersFactory = new UserFactory();
      const Date = await Dates.find();
   };
}