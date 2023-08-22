const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Products extends Model {}
Products.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    productName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    productPrice: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    productQuantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    productColor: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    productAvailability: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isFeatured: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "Products",
  }
);

module.exports = Products;
