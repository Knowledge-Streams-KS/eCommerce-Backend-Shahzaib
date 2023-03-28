const bcrypt = require("bcrypt");
const cartItemsModel = require("../model/cartItemsModel");
module.exports = {
  addItems: async function (body) {
    const data = await cartItemsModel.addItems(body);
    return data;
  },
  getItems: async function () {
    const data = await cartItemsModel.getItems();
    return data;
  },
  getItemsbyId: async function (ids) {
    const data = await cartItemsModel.getItemsbyId(ids);
    return data;
  },
  updateItems: async function (body) {
    const data = await cartItemsModel.updateItems(body);
    return data;
  },
  removeItems: async function (ids) {
    const data = await cartItemsModel.removeItems(ids);
    return data;
  },
};
