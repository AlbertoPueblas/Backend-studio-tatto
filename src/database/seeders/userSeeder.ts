import { SeederConfig } from "../../config/seeders"
import { UserRoles } from "../../constants/UserRole";
import { User } from "../../models/User";
import { UserFactory } from "../factories/UserFactory";
import { Seeder } from "./Seeders"

//------------------------------------------------------------------------------

export class UserSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const { ADMINS, ARTISTS, CLIENT,  } =
      SeederConfig;

      const usersFactory = new UserFactory();
      
      //admin
      const adminUsers = usersFactory.createMany(ADMINS);
      adminUsers.forEach((user, i) =>{
         user.role = UserRoles.ADMIN;
         user.email = `admin${i + 1}@admin.com`;

      });

      //Managers
      const artistUsers = usersFactory.createMany(ARTISTS);
      artistUsers.forEach((user, i) =>{
         user.role = UserRoles.ARTISTS;
         user.email = `artist${i + 1}@manager.com`;
      });

      //Clients
      const clientUsers = usersFactory.createMany(CLIENT);
      clientUsers.forEach((user) =>{
         user.role = UserRoles.CLIENT;

      });

      //Save users
      const allUsers = [...adminUsers,...artistUsers,...clientUsers];
      await User.save(allUsers);
   }
};
