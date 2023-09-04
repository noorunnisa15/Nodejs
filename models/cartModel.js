const { models } = require("./index");

module.exports = {
  createCart: async (id) => {
    try {
      return await models.Cart.create({
        userId: id,
      });
    } catch (error) {
      return error;
    }
  },
  getCartItembyId: async function (productId, cartId) {
    try {
      return await models.CartHasProducts.findOne({
        where: [{ productId: productId }, { cartId: cartId }],
      });
    } catch (error) {
      return error;
    }
  },
};
/*const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class createCart extends Model {}
createCart.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    itemsCount: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "createCart",
  }
);

module.exports = createCart;*/
