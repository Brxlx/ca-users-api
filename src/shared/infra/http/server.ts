import { app } from './app';

const APP_PORT = Number(process.env.APP_PORT) || 5000;

app.listen(APP_PORT, () => {
  console.log(app.printRoutes());
  console.log(`App running on port ${APP_PORT}`);
});
