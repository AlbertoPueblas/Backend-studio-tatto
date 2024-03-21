import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    QueryRunner
} from "typeorm"
import { TattoArtist } from "./TattoArtist";
import { Dates } from "./dates";

//------------------------------------------------------------------------

@Entity('jobs')
export class Job extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "job" })
    jobs!: string;



    @ManyToOne(() => TattoArtist, (tattoArtist) => tattoArtist.job)
    @JoinColumn({ name: "tattoArtist_id" })
    tattoArtist?: TattoArtist;

    @OneToMany(() => Dates, (dates) => dates.job)
    dates?: Dates[];

}

