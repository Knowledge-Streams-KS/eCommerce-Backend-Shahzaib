const bcrypt = require("bcrypt");
const productModel = require("../model/productModel");
module.exports = {
  addProduct: async function (body) {
    const data = await productModel.addProduct(body);
    return data;
  },
  createBulkProduct: async function () {
    const data = await productModel.createBulkProduct();
    return data;
  },
  getProduct: async function () {
    const data = await productModel.getProduct();
    return data;
  },
  getProductbyId: async function (ids) {
    const data = await productModel.getProductbyId(ids);
    return data;
  },
  updateProduct: async function (body) {
    const data = await productModel.updateProduct(body);
    return data;
  },
  removeProduct: async function (ids) {
    const data = await productModel.removeProduct(ids);
    return data;
  },
  getCategories: async function () {
    const data = await productModel.getCategories();
    return data;
  },
  getProductbyCategory: async function (query) {
    const data = await productModel.getProductbyCategory(query);
    return data;
  },
};
