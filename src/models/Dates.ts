import { 
    BaseEntity, 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn
} from "typeorm"
import { User } from "./User";
import { Job } from "./Job";

//--------------------------------------------------------------------

@Entity('dates')
export class Dates extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: "appointment_date"})
    appointmentDate!: Date;



    @Column({name: "user_id"})
    userId!:number;

    @Column({name: "job_id"})
    jobId!:number;


@ManyToOne(() => User, (user) => user.dates)
    @JoinColumn({ name: "user_id"})
    user!:User;

@ManyToOne(() => Job, (job) => job.dates)
    @JoinColumn({ name: "job_id"})
    job!:Job;
}