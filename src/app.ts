import 'dotenv/config';
import fastify from 'fastify';
import cors from 'fastify-cors';
// import fastifyExpress from 'fastify-express';

const app = fastify();

// cors configuration
app.register(cors, {
  origin: (org, cb) => {
    // org = '192.168.0.0';
    if (/localhost/.test(org) || /undefined/.test(org)) {
      cb(null, true);
    }
    setTimeout(() => {
      cb(new Error('Not allowed origin'), false);
    }, 750);
  },
});

export { app };
