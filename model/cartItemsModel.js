const { models } = require("./definition/index");
module.exports = {
  addItems: async function (body) {
    const result = await models.CartItems.create(body);
    return result;
  },
  getItems: async function () {
    const result = await models.CartItems.findAll({
      include: models.Products,
    });
    return result;
  },
  getItemsbyId: async function (ids) {
    const result = await models.CartItems.findAll({
      where: { id: ids },
      include: models.Products,
    });
    return result;
  },
  updateItems: async function (body) {
    const result = await models.CartItems.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removeItems: async function (ids) {
    const result = await models.CartItems.destroy({
      where: { id: ids },
    });
    return result;
  },
};
