import { app } from './app';

async function run() {
  const APP_PORT = Number(process.env.APP_PORT) || 5000;
  app.listen(APP_PORT, '0.0.0.0', () => {
    console.log(app.printRoutes());
    console.log(`App running on port ${APP_PORT}`);
  });
}

run();
