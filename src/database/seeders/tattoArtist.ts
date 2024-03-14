import { SeederConfig } from "../../config/seeders"
import { TattoArtist } from "../../models/TattoArtist";
import { TattoArtistFactory } from "../factories/TattoArtistFactory";
import { Seeder } from "./Seeders"

export class tattoSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const {ARTIST } = SeederConfig;

      const tattoArtist = new TattoArtistFactory().createMany(ARTIST);
      await TattoArtist.save(tattoArtist);
   };
}