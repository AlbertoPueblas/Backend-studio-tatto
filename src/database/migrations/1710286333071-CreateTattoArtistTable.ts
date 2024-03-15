import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTattoArtistTable1710286333071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
           new Table({
              name: "tattoArtist",
              columns: [
                 {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                 },
                 {
                    name: "first_name",
                    type: "varchar",
                    length: "50",
                 },
                 {
                    name: "email",
                    type: "varchar",
                    length: "100",
                    isUnique: true,
                 },
                ]
           }),
           true
        );
     }
  
     public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tattoArtist");
     }

}