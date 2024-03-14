import { 
    BaseEntity, 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    ManyToOne, 
    JoinColumn, 
    ManyToMany,
    JoinTable,
    OneToMany
} from "typeorm"
import {  Role } from "./Role";
import { Job } from "./Job";
import { Dates } from "./Dates";

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ name: 'first_name' })
    firstName!: string;


    @Column({ name: "last_name" })
    lastName!: string;

    @Column({ name: "email" })
    email!: string;

    @Column({ name: "password" })
    password!: string;

    @Column({ name: "is_active" })
    isActive!:boolean;

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "role_id"})
    role!:Role;
    
    @ManyToMany(() => Job, (job) => job.users)
    @JoinTable({
        name: "favorite_tatto",
        joinColumn: {
            name: "user_id",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "jobs_id",
            referencedColumnName: "id",

        }
    })
    favoriteJobs?: Job[];

    @OneToMany(() => Dates, (dates) => dates.user)
dates?: Date[];

}
