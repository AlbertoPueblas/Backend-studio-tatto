import { 
    BaseEntity, 
    Column, 
    Entity,  
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm"
import { Job } from "./Job";

//-----------------------------------------------------------------------------

@Entity('tattoArtist')
export class TattoArtist extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({name: "first_name"})
    firstName!: string

    @Column({name: "email"})
    email!: string

    // @Column({name: "tattoArtist_id"})
    // tattoArtist!: number;

// @OneToMany(() => Dates, (dates) => dates.tattoArtist)
//    dates?: Dates[];

   @OneToMany(() => Job, (job) => job.tattoArtist)
   jobs?: Job[];
};
   