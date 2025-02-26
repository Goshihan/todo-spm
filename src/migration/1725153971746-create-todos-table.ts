// eslint-disable-next-line prettier/prettier
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTodosTable1725153971746 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      'create table todos ( id bigserial primary key, name text, completed Boolean not null default false ); ',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('drop table todos;');
  }
}
