const { Sequelize, INTEGER, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");

class CartItems extends Model {}
CartItems.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      type: INTEGER,
    },
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "CartItems",
  }
);
module.exports = CartItems;
