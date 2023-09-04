const { models } = require("../models/index");
module.exports = {
  createProduct: async (body) => {
    try {
      return await models.createProduct.create({ ...body });
    } catch (error) {
      return error;
    }
  },
  getProductbyId: async function (id) {
    try {
      return await models.Products.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error;
    }
  },
};
