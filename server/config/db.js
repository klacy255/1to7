const Sequelize = require('sequelize');
const env = require('./env');

//initialize sequelize instance
const instance = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

//Connect locations in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.instance = instance;

//Models/tables
db.locations = require('../models/locations.js')(instance, Sequelize);

module.exports = db;
