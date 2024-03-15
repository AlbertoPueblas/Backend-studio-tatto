import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany
} from "typeorm"
import { Role } from "./Role";
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
    isActive!: boolean;

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({ name: "role_id" })
    role!: Role;

    @OneToMany(() => Dates, (dates) => dates.user)
    dates?: Dates[];

}