import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1704467364704 implements MigrationInterface {
    name = ' $npmConfigName1704467364704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "lastname" character varying(30)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastname"`);
    }

}
