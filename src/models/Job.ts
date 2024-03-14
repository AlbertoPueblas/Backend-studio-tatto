import { 
    BaseEntity, 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToMany, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm"
import { TattoArtist } from "./TattoArtist";
import { User } from "./User";
import { Dates } from "./Dates";

@Entity('jobs')
export class Job extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: "first_name"})
    firstName!: string

    @Column({name: "email"})
    email!: string

@ManyToOne(() => TattoArtist, (tattoArtist) => tattoArtist.job)
@JoinColumn({name: "job_id"})
   tattoArtist?: TattoArtist;

@ManyToMany(() => User, (user) => user.favoriteJobs)
users?: User[];

@OneToMany(() => Dates, (dates) => dates.job)
    dates?: Date[];

}

