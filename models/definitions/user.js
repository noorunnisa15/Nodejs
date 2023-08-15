const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    password : {
        allowNull: false,
        type: DataTypes.STRING,
    },
    isBlocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: true, // it create upadted and created columns in db where time and date will be recorded
    paranoid: true, // it adds column of delete at
    modelName: "Users",
  }
);

module.exports = User;