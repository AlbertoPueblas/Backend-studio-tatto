import { RoleSeeder } from "./roleSeeder";
import { dateSeeder } from "./dateSeeder";
import { jobSeeder } from "./jobSeeders";
import { tattoSeeder } from "./tattoArtistSeeder";
import { UserSeeder } from "./userSeeder";


(async () => {
    console.log("Starting seeders...");
    
    await new RoleSeeder().start();
    await new UserSeeder().start();
    await new tattoSeeder().start();
    await new jobSeeder().start();
    await new dateSeeder().start();
    
})();




