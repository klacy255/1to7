//export our Locaiton Object
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING
      required: true
    },
    type: {
      type: DataTypes.STRING
    },
    latitude: {
      type: DataTypes.INTEGER
    },
    longitude: {
      type: DataTypes.INTEGER
    }
  });
  return Location;
};
