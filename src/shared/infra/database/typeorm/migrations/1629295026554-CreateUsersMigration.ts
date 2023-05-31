import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersMigration1629295026554 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'first_name',
            type: 'varchar',
          },
          {
            name: 'last_name',
            type: 'varchar',
          },
          {
            name: 'nickname',
            type: 'varchar',
            isUnique: true,
            length: '30',
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'bio',
            type: 'varchar',
            isNullable: true,
            length: '100',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            isNullable: false,
            default: "timezone('utc'::text, now())",
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            isNullable: false,
            default: "timezone('utc'::text, now())",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
