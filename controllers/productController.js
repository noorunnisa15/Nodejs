const joi = require("joi");
const productService = require("../services/productService");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const createProductSchema = joi.object({
    // username: joi.string().required(),
    // Date:8/15/2023
    productName: joi.string().required().min(3).max(35),
    productPrice: joi.number().required(),
    productQuantity: joi.number().required(),
    productSize: joi.string().required(),
    productColor: joi.string().required(),
  });
  module.exports = {
    createProduct: async (req, res) =>{
        try {
            const validate = await createProductSchema.validateAsync(req.body);
            if (validate.error) {
              res.status(StatusCodes.BAD_REQUEST).send({
                data: {},
                message: ReasonPhrases.BAD_REQUEST,
                error: validate.error,
              });
            }
            const response = await productService.createProduct(validate);
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
    }
  }
  