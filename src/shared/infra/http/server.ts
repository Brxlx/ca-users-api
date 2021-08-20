import { app } from './app';

const APP_PORT = Number(process.env.APP_PORT) || 5000;
app.listen(APP_PORT, '0.0.0.0', err => {
  if (err) {
    app.log.fatal(err);
    process.exit(1);
  }
  console.log(app.printRoutes());
  console.log(`App running on port ${APP_PORT}`);
});
