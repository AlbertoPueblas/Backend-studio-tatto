import { Role } from "../models/Role";

//------------------------------------------------------------------------------

export const UserRoles = {
   ADMIN: { id: 1, name: "admin" } as Role,
   MANAGER: { id: 2, name: "manager" } as Role,
   ARTISTS: { id: 3, name: "artists" } as Role,
   CLIENT: { id: 4, name: "Client" } as Role,
   JOBS: { id: 5, name: "Job" } as Role,

};
