import { 
    BaseEntity, 
    Column, 
    Entity,  
    JoinColumn,  
    ManyToOne,  
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm"
import { Job } from "./Job";
import { Role } from "./Role";

//-----------------------------------------------------------------------------

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
   
};
   