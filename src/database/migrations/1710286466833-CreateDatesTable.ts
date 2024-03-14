import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDatesTable1710286466833 implements MigrationInterface {

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
                    name: "day_date",
                    type: "datetime",
                 },
                 {
                    name: "hour_date",
                    type: "datetime",
                 },
                 {
                    name: "confirm_date",
                    type: "datetime",
                    isNullable: true,
                 },
                 {
                    name: "users_id",
                    type: "int",
                 },      
                 {
                    name: "jobs_id",
                    type: "int",
                 },

              ],
              foreignKeys: [
                 {
                    columnNames: ["users_id"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                 },                 
                 {
                  columnNames: ["jobs_id"],
                  referencedTableName: "jobs",
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
