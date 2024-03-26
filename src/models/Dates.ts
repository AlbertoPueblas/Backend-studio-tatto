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

    @Column({name: "tattoArtist_id"})
    tattoArtistId!:number;

    @ManyToOne(() => User, (user) => user.clientDates)
    @JoinColumn({ name: "user_id"})
    client!:User;

    @ManyToOne(() => Job, (job) => job.dates)
    @JoinColumn({ name: "job_id"})
    job!:Job;

    @ManyToOne(() => User, (user) => user.artistDates)
    @JoinColumn({ name: "tattoArtist_id"})
    artist!:User;
}