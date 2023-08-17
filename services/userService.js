const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async function (body) {
    // const response = userModel.createUser(body);
    // return response;
    try {
      const saltRounds = 10;
      body.password = await bcrypt.hash(body.password, saltRounds);
      const response = await userModel.createUser(body);
      if (response) {
        delete response.dataValues.password;
        return response;
      }
      return "User not created";
    } catch (error) {
      return error;
    }
  },
  getUsers: async function () {
    try {
      const response = await userModel.getUsers();
      if (response) {
        return response;
      }
      return "No Data Exits";
    } catch (error) {
      return error;
    }
  },
  getUserbyEmail: async function (email) {
    try {
        const response = await userModel.getUserbyEmail(email);
        if (response) {
          return response;
        }
        return "No Data Exits";
    } catch (error) {
      return error;
    }
  }
};
