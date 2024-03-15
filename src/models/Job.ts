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
import { Dates } from "./Dates";

@Entity('jobs')
export class Job extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "job" })
    job!: string;

    @ManyToOne(() => TattoArtist, (tattoArtist) => tattoArtist.jobs)
    @JoinColumn({ name: "tattoArtist_id" })
    tattoArtist?: TattoArtist;

    @OneToMany(() => Dates, (dates) => dates.job)
    dates?: Dates[];

}
