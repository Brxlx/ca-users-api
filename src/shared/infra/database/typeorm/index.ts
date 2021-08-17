import 'dotenv/config';
import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { getConnectionManager, Connection } from 'typeorm';

const createConnection = async (fastify: FastifyInstance) => {
  try {
    const connectionManager = getConnectionManager();
    const connection: Connection = connectionManager.create({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      cli: {
        entitiesDir: './src/modules/**/infra/typeorm/entities/*.ts',
        migrationsDir: './src/database/migrations/*.ts',
      },
    });
    await connection.connect(); // performs connection
    console.log('Connected to database');
  } catch (err) {
    // console.log(err);
    fastify.log.error(err);
    // fastify.close();
    process.exit(1);
  }
};

const dbConnect = fastifyPlugin(createConnection);

export { dbConnect };
