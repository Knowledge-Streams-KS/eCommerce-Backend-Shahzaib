const Sequelize = require("sequelize");
var config = require("../../config.json");
config = config.db;
const db = {};
let sequelize = require("../../common/dbConnection");
const User = require("../definition/User");
const Products = require("../definition/Products");
const Cart = require("../definition/Cart");
const CartItems = require("../definition/CartItems");

const Orders = require("../definition/Orders");

const Roles = require("../definition/Roles");

//Roles-User many-to-one
Roles.hasMany(User, { onDelete: "CASCADE", foreignKey: "roleId" });
User.belongsTo(Roles, { onDelete: "CASCADE", foreignKey: "roleId" });

//User-Cart one-to-one
User.hasOne(Cart, { onDelete: "CASCADE", foreignKey: "userId" });
Cart.belongsTo(User, { onDelete: "CASCADE", foreignKey: "userId" });

//Products-Cart many-to-many
//for this we add another table with which both tables have a one to many relationship

Products.hasMany(CartItems, { onDelete: "CASCADE", foreignKey: "productId" });
CartItems.belongsTo(Products, {
  onDelete: "CASCADE",
  foreignKey: "productId",
});

Cart.hasMany(CartItems, { onDelete: "CASCADE", foreignKey: "cartId" });
CartItems.belongsTo(Cart, { onDelete: "CASCADE", foreignKey: "cartId" });

const models = {
  User,
  Products,
  Cart,
  Orders,
  Roles,
  CartItems,
};
sequelize.models = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, models };
