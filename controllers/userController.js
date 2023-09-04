const joi = require("joi");
const userService = require("../services/userService");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const createUserSchema = joi.object({
  // username: joi.string().required(),
  // Date:8/15/2023
  firstname: joi.string().required().min(3).max(35),
  lastname: joi.string().required().min(3).max(35),
  // Previous
  email: joi.string().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  // adminId: joi.number().required(),
});

const userEmailSchema = joi.object({
  email: joi.string().required(),
});

const userIdSchema = joi.object({
  id: joi.number().required(),
});

const updateUserSchema = joi.object({
  id: joi.number().required(),
  firstname: joi.string().required().min(3).max(35),
  lastname: joi.string().required().min(3).max(35),
  email: joi.string().required(),
});
module.exports = {
  // createUser : function(req, res){
  //     const response = userService.createUser();
  //     res.send(response);
  // },
  createUser: async function (req, res) {
    console.log("usercontroller");
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      if (validate.error) {
        res.status(StatusCodes.BAD_REQUEST).send({
          data: {},
          message: ReasonPhrases.BAD_REQUEST,
          error: validate.error,
        });
      }
      const response = await userService.createUser(validate);
      res.status(StatusCodes.OK).send({
        data: { response },
        message: ReasonPhrases.OK,
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send({
        data: {},
        message: ReasonPhrases.NOT_FOUND,
        error: error,
      });
      // res.status(500).send({error: error.message});
    }
  },
  getUsers: async function (req, res) {
    try {
      const response = await userService.getUsers();
      res.status(StatusCodes.OK).send({
        data: { response },
        message: ReasonPhrases.OK,
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send({
        data: {},
        message: ReasonPhrases.NOT_FOUND,
        error: error,
      });
      // res.status(500).send({error: error.message});
    }
  },
  getUserbyEmail: async function (req, res) {
    try {
      const validate = await userEmailSchema.validateAsync(req.query);
      if (validate.error) {
        res.status(StatusCodes.BAD_REQUEST).send({
          data: {},
          message: ReasonPhrases.BAD_REQUEST,
          error: validate.error,
        });
      }
      const response = await userService.getUserbyEmail(validate.email);
      res.status(StatusCodes.OK).send({
        data: { response },
        message: ReasonPhrases.OK,
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send({
        data: {},
        message: ReasonPhrases.NOT_FOUND,
        error: error,
      });
    }
  },
  updateUser: async function (req, res) {
    try {
      const validate = await updateUserSchema.validateAsync(req.body);
      if (validate.error) {
        res.status(StatusCodes.BAD_REQUEST).send({
          data: {},
          message: ReasonPhrases.BAD_REQUEST,
          error: validate.error,
        });
      }
      const response = await userService.updateUser(validate);
      res.status(StatusCodes.OK).send({
        data: { response },
        message: "Successfully updated!",
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send({
        data: {},
        message: "Unable to update!",
        error: error,
      });
      // res.status(500).send({error: error.message});
    }
  },
  deleteUser: async function (req, res) {
    try {
      const validate = await userIdSchema.validateAsync(req.query);
      if (validate.error) {
        res.status(StatusCodes.BAD_REQUEST).send({
          data: {},
          message: ReasonPhrases.BAD_REQUEST,
          error: validate.error,
        });
      }
      const response = await userService.deleteUser(validate.id);
      res.status(StatusCodes.OK).send({
        data: { response },
        message: "Successfully Deleted!",
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send({
        data: {},
        message: "Unable to Delete!",
        error: error,
      });
    }
  },
};
