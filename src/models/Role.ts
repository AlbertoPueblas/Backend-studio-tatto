import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
 } from "typeorm";
 import { User } from "./User";
 

@Entity("roles")
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: "name"})
    name!: string;

//Relation

@OneToMany(() => User, (user) => user.role)
    users?: User[];
}
