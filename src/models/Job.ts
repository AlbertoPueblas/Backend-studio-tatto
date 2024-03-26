import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Dates } from "./dates";

//------------------------------------------------------------------------

@Entity('jobs')
export class Job extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "job" })
    jobs!: string;

    @OneToMany(() => Dates, (dates) => dates.job)
    dates?: Dates[];


    

}

