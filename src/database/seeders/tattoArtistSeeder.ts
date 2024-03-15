import { SeederConfig } from "../../config/seeders"
import { TattoArtist } from "../../models/TattoArtist";
import { TattoArtistFactory } from "../factories/TattoArtistFactory";
import { Seeder } from "./Seeders"

export class tattoSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const {MANAGER } = SeederConfig;

      const tattoArtists = new TattoArtistFactory().createMany(MANAGER);
      await TattoArtist.save(tattoArtists);
   };
}