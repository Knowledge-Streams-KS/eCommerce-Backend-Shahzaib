module.exports = {
  //users
  createUser: require("./Users/createUser"),
  getUser: require("./Users/getUser"),
  getUsersbyId: require("./Users/getUsersbyId"),
  updateUser: require("./Users/updateUser"),
  removeUser: require("./Users/removeUser"),
  //products
  addProduct: require("./Product/addProduct"),
  getProduct: require("./Product/getProduct"),
  getProductbyId: require("./Product/getProductbyId"),
  removeProduct: require("./Product/removeProduct"),
  updateProduct: require("./Product/updateProduct"),
  createBulkProduct: require("./Product/createBulkProduct"),
  getCategories: require("./Product/getCategories"),
  getProductbyCategory: require("./Product/getProductbyCategory"),

  //cartItems
  addItems: require("./CartItems/addItems"),
  getItems: require("./CartItems/getItems"),
  getItemsbyId: require("./CartItems/getItemsbyId"),
  removeItems: require("./CartItems/removeItems"),
  updateItems: require("./CartItems/updateItems"),
  //cart
  addtoCart: require("./Cart/addtoCart"),
  cartProducts: require("./Cart/cartProducts"),
  cartProductbyId: require("./Cart/cartProductbyId"),
  removefromCart: require("./Cart/removefromCart"),
  updateCart: require("./Cart/updateCart"),
  //authentication
  createRole: require("./common/role"),
  login: require("./common/authentication"),
  logout: require("./common/logout"),
};
