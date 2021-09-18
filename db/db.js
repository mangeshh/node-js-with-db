var Sequelize = require('sequelize');
 
// we are creating database connection here...
const sequelize = new Sequelize('world', 
  'root', 'root', {
  
  host: process.env.DB_IGLOO_HOST,
  dialect: 'mysql',

  logging: true, // disable logging; default: console.log
  timestamps: false,
  dialectOptions: {
    requestTimeout: process.env.DB_TIMEOUT // timeout = 5 seconds
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Host: %s DBName: %s icm Connection has been established successfully.', process.env.DB_IGLOO_NAME, process.env.DB_IGLOO_NAME);
  })
  .catch(err => {
    console.error('Host: %s DBName: %s , Unable to connect to the the databse. ##Error##: %s', 'localhost', 'world', 
    'root', 'root', err);
  });

  /**
   * country (table name) detals also need to specify. To have table references!
   */
const city = require("../models/city")(sequelize, Sequelize);
const country = require("../models/country")(sequelize, Sequelize);
const states = require("../models/states")(sequelize, Sequelize);

var db = {
  "city": city,
  "country" : country,
  "states" : states
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
