// import models and connections
const sequelize = require("../bin/dbConnection");

// importing models, model => table
const { User, Admin, Cart, Products, CartHasProducts } = require("./definitions/index");
// relatio starts here
// 1:1 relation
User.hasOne(Cart, { foreignKey: "userId" });
Cart.belongsTo(User, { foreignKey: { name: "userId", allowNull: false } });

// Admin.hasMany(User, { foreignKey: "adminId" });
// User.belongsTo(Admin, { foreignKey: { name: "adminId", allowNull: false } });

Cart.hasMany(CartHasProducts, { foreignKey: "cartId" });
CartHasProducts.belongsTo(Cart, { foreignKey: { name: "cartId", allowNull: false } });

Products.hasMany(CartHasProducts, { foreignKey: "productId" });
CartHasProducts.belongsTo(Products, { foreignKey: { name: "productId", allowNull: false } });

// Products.belongsToMany(Cart, { through: 'CartHasProducts' });
// Cart.belongsToMany(Products, { through: 'CartHasProducts' });


// models array
const models = { User, Admin, Cart, Products, CartHasProducts };
const db = {};

db.sequelize = sequelize; // database connection
sequelize.models = models; // added array of tables/models

module.exports = { db, models };
