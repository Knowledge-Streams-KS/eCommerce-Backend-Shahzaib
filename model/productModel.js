const { models } = require("./definition/index");
const data = require("../data.json");
const { query } = require("express");
module.exports = {
  addProduct: async function (body) {
    const result = await models.Products.create(body);
    return result;
  },
  createBulkProduct: async function () {
    const result = await models.Products.bulkCreate(data);
    return result;
  },
  getProduct: async function () {
    const result = await models.Products.findAll();
    return result;
  },
  getProductbyId: async function (ids) {
    const result = await models.Products.findOne({
      where: { id: ids },
    });
    return result;
  },
  updateProduct: async function (body) {
    const result = await models.Products.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeProduct: async function (ids) {
    const result = await models.Products.destroy({
      where: { id: ids },
    });
    return result;
  },
  getCategories: async function () {
    const result = await models.Products.findAll();
    const arr = result.map((element) => element.category);
    const data = arr.filter(
      (element, index, arr2) => arr2.indexOf(element) == index
    );
    return data;
  },
  getProductbyCategory: async function (query) {
    const result = await models.Products.findAll({
      where: { category: query.category },
    });
    return result;
  },
};
