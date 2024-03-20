import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTattoArtistTable1710958684615 implements MigrationInterface {

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
                  name: "last_name",
                  type: "varchar",
                  length: "50",
                  },
                 {
                    name: "email",
                    type: "varchar",
                    length: "100",
                    isUnique: true,
                 },
               //   {
               //      name: "password",
               //      type: "varchar",
               //      length: "10",
               //      isUnique: true,
               //    },
                  // {
                  // name: "tattoArtist_id",
                  // type: "int",
                  // },
                  {
               name: "is_active",
               type: "boolean",
               default:true,
              },
            ],
            // foreignKeys: [
            // {
            //    columnNames: ["tattoArtist_id"],
            //    referencedTableName: "tattoArtist",
            //    referencedColumnNames: ["id"],
            // },
            // ],
           }),
           true
        );
     }
  
     public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tattoArtist");
     }

}
