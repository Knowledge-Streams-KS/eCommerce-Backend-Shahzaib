const bcrypt = require("bcrypt");
const cartModel = require("../model/cartModel");
module.exports = {
  addtoCart: async function (body) {
    const data = await cartModel.addtoCart(body);
    return data;
  },
  cartProducts: async function () {
    const data = await cartModel.cartProducts();
    return data;
  },
  cartProductbyId: async function (ids) {
    const data = await cartModel.cartProductbyId(ids);
    return data;
  },
  updateCart: async function (body) {
    const data = await cartModel.updateCart(body);
    return data;
  },
  removefromCart: async function (ids) {
    const data = await cartModel.removefromCart(ids);
    return data;
  },
};
