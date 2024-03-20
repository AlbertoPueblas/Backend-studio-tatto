import { RoleSeeder } from "./roleSeeder";
import { dateSeeder } from "./dateSeeder";
import { jobSeeder } from "./jobSeeders";
import { tattoArtistSeeder } from "./tattoArtistSeeder";
import { UserSeeder } from "./userSeeder";


(async () => {
    console.log("Starting seeders...");
    
    await new RoleSeeder().start();
    await new UserSeeder().start();
    await new tattoArtistSeeder().start();
    await new jobSeeder().start();
    await new dateSeeder().start();
    
})();




