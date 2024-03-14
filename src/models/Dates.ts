import { 
    BaseEntity, 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn
} from "typeorm"
import { User } from "./User";
import { Job } from "./Job";

@Entity('dates')
export class Dates extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: "day_date"})
    dayDate!: number;

    @Column({name: "hour_date"})
    hourDate!: number;

    @Column({name: "confirm_date"})
    confirmDay!:number;

    @Column({name: "users_id"})
    userId!:number;

    @Column({name: "jobs_id"})
    jobsId!:number;


@ManyToOne(() => User, (user) => user.dates)
    @JoinColumn({ name: "user_id"})
    user!:User;

@ManyToOne(() => Job, (job) => job.dates)
    @JoinColumn({ name: "jobs_id"})
    job!:Job;

    @OneToMany(() => Dates, (dates) => dates.job)    
    dates?: Date[];
   static user: User;
}