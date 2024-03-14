import { UserFactory } from "../factories/UserFactory";

const users =
 new UserFactory().createMany(100);
 console.log(users);
 