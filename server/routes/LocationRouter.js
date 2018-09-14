//Express.js routes
module.exports = (app, db) => {

  // GET all locations
  app.get('/locations', (req, res) => {
    db.locations.findAll()
      .then(locations => {
        res.json(locations);
      });
  });

  // GET one location by id
  app.get('/location/:id', (req, res) => {
    const id = req.params.id;
    //search by id
    db.locations.find({
      where: { id: id}
    })
      .then(location => {
        res.json(location);
      });
  });

  // POST location
  app.post('/location', (req, res) => {
    const name = req.body.name;
    const type = req.body.role;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    db.loactions.create({
      name: name,
      type: type,
      latitude: latitude,
      longitude: longitude
    })
      .then(newLocation => {
        res.json(newLocation);
      })
  });


  // DELETE single location
  app.delete('/location/:id', (req, res) => {
    const id = req.params.id;
    //Sequelize method is destroy not delete
    db.locaitons.destroy({
      where: { id: id }
    })
      .then(deletedLocation => {
        res.json(deletedLocation);
      });
  });
};
