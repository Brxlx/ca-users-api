import 'dotenv/config';
import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
// import fastifyExpress from 'fastify-express';

const app = fastify();

// cors configuration
app.register(fastifyCors, {});

export { app };
