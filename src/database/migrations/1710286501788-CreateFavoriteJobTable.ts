import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFavoriteJobTable1710286501788 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
           new Table({
              name: "favorite_tattoo",
              columns: [
                 {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
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
                 },                 {
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
        await queryRunner.dropTable("favorite_tattoo");
     }

}