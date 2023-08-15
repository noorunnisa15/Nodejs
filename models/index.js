// import models and connections
const sequelize = require("../bin/dbConnection");

// importing models
const User = require("./definitions/user");
const models = { User };
const db = {};

db.sequelize = sequelize; // database connection
sequelize.models = models;

module.exports = { db, models };
