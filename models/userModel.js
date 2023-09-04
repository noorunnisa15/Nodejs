const { response } = require("express");
const { models } = require("../models/index");

module.exports = {
  // createUser : function(){
  //     try{
  //         return "Create User Model";
  //     }catch (error){
  //         return error;
  //     }
  // },
  createUser: async function (body) {
    console.log("model");
    console.log("model");
    try {
      return await models.User.create({ ...body });
    } catch (error) {
      return error;
    }
  },
  getUsers: async function () {
    // no need to set parameters bcz data set nai krna
    try {
      return await models.User.findAll({
        attributes: { exclude: ["password"] },
      });
    } catch (error) {
      return error;
    }
  },
  getUserbyEmail: async function (email) {
    try {
      //   return await models.User.findOne(email);
      return await models.User.findOne({
        where: {
          email: email,
        },
        attributes: {
          exclude: ["password"],
        },
      });
    } catch (error) {
      return error;
    }
  },
  getUserbyId: async function (id) {
    try {
      //   return await models.User.findOne(email);
      return await models.User.findOne({
        where: {
          id: id,
        },
        attributes: {
          exclude: ["password"],
        },
      });
    } catch (error) {
      return error;
    }
  },
  updateUser: async function (body) {
    try {
      return await models.User.update(
        { ...body },
        {
          where: {
            id: body.id,
          },
        }
      );
    } catch (error) {
      return error;
    }
  },
  deleteUser: async (id) => {
    try {
      return await models.User.destroy({ where: { id: id } });
    } catch (error) {
      return error;
    }
  },
};
