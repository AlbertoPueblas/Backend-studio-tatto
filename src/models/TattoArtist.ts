import { 
    BaseEntity, 
    Column, 
    Entity, 
    JoinColumn,  
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm"
import { Job } from "./Job";

@Entity('artist')
export class TattoArtist extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: "first_name"})
    firstName!: string

    @Column({name: "email"})
    email!: string
@OneToMany(() => Job, (job) => job.tattoArtist)
   job!: Job;
}
