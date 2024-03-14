import { RoleSeeder } from "./roleSeeder";

(async () => {
    console.log("Starting seeders...");

    await new RoleSeeder().start();
    
})();

//  import { RoleSeeder } from "./roleSeeder";
// import { UserSeeder } from "./userSeeder";
// import { dateSeeder } from "./dateSeeder";
// import { jobSeeder } from "./jobSeeders";
// import { tattoSeeder } from "./tattoArtist";

// (async () => {
//    console.log("Starting seeders...");

//    await new RoleSeeder().start();
//    await new tattoSeeder().start();
//    await new dateSeeder().start();
//    await new UserSeeder().start();
//    await new jobSeeder().start();
// })();