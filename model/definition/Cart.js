const { Sequelize, INTEGER, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");

class Cart extends Model {}
Cart.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: INTEGER,
    },
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Cart",
  }
);
module.exports = Cart;
