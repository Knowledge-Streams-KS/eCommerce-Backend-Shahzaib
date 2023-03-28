const { Sequelize, DataTypes, INTEGER, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");

class Roles extends Model {}
Roles.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      type: INTEGER,
    },
    typeofUser: {
      allowNull: false,
      type: DataTypes.STRING(),
      unique: true,
    },
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Roles",
  }
);
module.exports = Roles;
