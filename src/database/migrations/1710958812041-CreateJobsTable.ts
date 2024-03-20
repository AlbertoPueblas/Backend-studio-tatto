import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateJobsTable1710958812041 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
           new Table({
              name: "jobs",
              columns: [
                 {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                 },
                 {
                    name: "job",
                    type: "varchar",
                    length: "255",
                 },
                 {
                    name: "tattoArtist_id",
                    type: "int",
                 },

              ],
              foreignKeys: [
                 {
                    columnNames: ["tattoArtist_id"],
                    referencedTableName: "tattoArtist",
                    referencedColumnNames: ["id"],
                 },
              ],
           }),
           true
        );
     }
  
     public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("jobs");
     }
}
