
const routes = require('./routes/LocationRouter');

// injects the app object and db object into each route.
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};
