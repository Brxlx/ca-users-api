import fastify from 'fastify';
import 'dotenv/config';

const app = fastify();

const APP_PORT = process.env.APP_PORT || 5000;
app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`);
});

export { app };
