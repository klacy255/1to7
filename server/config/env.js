//Contains all environment variables for the database connection.
const env = {
  PORT: process.env.PORT || 8080,
  DATABASE_URL: process.env.DATABASE_URL || '',
  DATABASE_NAME: process.env.DATABASE_NAME || 'locations_database',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || '',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
  DATABASE_PORT: process.env.DATABASE_PORT || 3000,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'sql',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;
