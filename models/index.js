// import models and connections
const sequelize = require("../bin/dbConnection");

// importing models, model => table
const User = require("./definitions/user");
const Admin = require("./definitions/admin");
const models = { User, Admin };
const db = {};

db.sequelize = sequelize; // database connection
sequelize.models = models; // added array of tables/models

module.exports = { db, models };
