import { 
    BaseEntity, 
    Column, 
    Entity,  
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm"
import { Job } from "./Job";

@Entity('tattoArtist')
export class TattoArtist extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: "first_name"})
    firstName!: string

    // @Column({name: "last_name"})
    // lastName!: string

    @Column({name: "email"})
    email!: string

    // @Column({ name: "password" })
    // password!: string;

@OneToMany(() => Job, (job) => job.tattoArtist)
   jobs?: Job[];
}
