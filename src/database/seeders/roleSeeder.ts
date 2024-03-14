import { UserRoles } from "../../constants/UserRole";
import { Role } from "../../models/Role";
import { Seeder } from "./Seeders";

export class RoleSeeder extends Seeder {
   protected async generate(): Promise<void> {
      const roles: Partial<Role>[] = [
         UserRoles.ADMIN,
         UserRoles.MANAGER,
         UserRoles.USER,
         UserRoles.ARTIST,
         UserRoles.DATES,
         UserRoles.JOBS,
     
      ];

      await Role.save(roles);
   }
}
