import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import db from './config/db.js';
import env from './config/env';
import router from './routes/router.js';

const app = express();
const PORT = env.PORT;

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});
//use our router with express and our db config
router(app, db);

//drop and resync with { force: true }
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});
