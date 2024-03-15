import { SeederConfig } from "../../config/seeders"
import { UserRoles } from "../../constants/UserRole";
import { User } from "../../models/User";
import { UserFactory } from "../factories/UserFactory";
import { Seeder } from "./Seeders"

export class UserSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const { ADMINS, MANAGER, CLIENT,  } =
      SeederConfig;

      const usersFactory = new UserFactory();
      
      //admin
      const adminUsers = usersFactory.createMany(ADMINS);
      adminUsers.forEach((user) =>{
         user.role = UserRoles.ADMIN;
      });

      //Managers
      const managerUsers = usersFactory.createMany(MANAGER);
      managerUsers.forEach((user) =>{
         user.role = UserRoles.MANAGER;
      });

      //Clients
      const clientUsers = usersFactory.createMany(CLIENT);
      clientUsers.forEach((user) =>{
         user.role = UserRoles.CLIENT;

      });

      //Save users
      const allUsers = [...adminUsers,...managerUsers,...clientUsers];
      await User.save(allUsers);
   }
};
