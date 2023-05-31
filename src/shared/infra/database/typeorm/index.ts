import 'dotenv/config';
import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
// import { resolve } from 'path';
import { getConnectionManager, Connection } from 'typeorm';

import { config } from './config';

const createConnection = async (fastify: FastifyInstance) => {
  try {
    const connectionManager = getConnectionManager();
    const connection: Connection = connectionManager.create(config);
    // console.log(connection);
    await connection.connect(); // performs connection
    // await connection.runMigrations();
    // console.log(connection.migrations);
    // console.log(connection.entityMetadatas);
    fastify.log.info('Connected to database');
  } catch (err) {
    // console.log(err);
    fastify.log.error(err);
    // fastify.close();
    process.exit(1);
  }
};

const dbConnect = fastifyPlugin(createConnection);

export { dbConnect };
