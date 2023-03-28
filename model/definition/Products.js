const { Sequelize, DataTypes, Model } = require("sequelize");
let sequelize = require("../../common/dbConnection");

class Products extends Model {}
Products.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING(),
    },
    rating: {
      type: DataTypes.JSON,
      rate: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
  },
  {
    timesstamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Products",
  }
);
module.exports = Products;
