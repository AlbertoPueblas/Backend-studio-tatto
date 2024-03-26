import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAppointmentTable1711132975971 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
           new Table({
              name: "dates",
              columns: [
                 {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                 },
                 {
                    name: "appointment_date",
                    type: "datetime",
                 },
                 {
                    name: "user_id",
                    type: "int",
                 },      
                 {
                    name: "job_id",
                    type: "int",
                 },
                 {
                  name: "tattoArtist_id",
                  type: "int",
                  },

              ],
              foreignKeys: [
                 {
                    columnNames: ["user_id"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                 },                 
                 {
                  columnNames: ["job_id"],
                  referencedTableName: "jobs",
                  referencedColumnNames: ["id"],
                  },
                  {
                     columnNames: ["tattoArtist_id"],
                     referencedTableName: "users",
                     referencedColumnNames: ["id"],
                  },
              ],
           }),
           true
        );
     }
  
     public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("dates");
     }

}
