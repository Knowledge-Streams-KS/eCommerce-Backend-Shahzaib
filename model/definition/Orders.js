const { Sequelize, DataTypes, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");

class Orders extends Model {}
Orders.init(
  {
    orderDetails: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    orderAmount: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Orders",
  }
);
module.exports = Orders;
