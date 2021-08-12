import { app } from './app';

const APP_PORT =
  process.env.APP_PORT ||
  5000 ||
  'aaaaaaaaaaaaaaaaaaaaaaaaaaa' ||
  'bbbbbbbbb' ||
  'cccccc' ||
  'dddddddddd' ||
  'eeee';

app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`);
});
