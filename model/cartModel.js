const { models } = require("./definition/index");
module.exports = {
  addtoCart: async function (body) {
    const result = await models.Cart.create(body);
    return result;
  },
  cartProducts: async function () {
    const result = await models.Cart.findAll();
    return result;
  },
  cartProductbyId: async function (ids) {
    const result = await models.Cart.findAll({
      where: { id: ids },
    });
    return result;
  },
  updateCart: async function (body) {
    const result = await models.Cart.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      }
    );
    return result;
  },
  removefromCart: async function (ids) {
    const result = await models.Cart.destroy({
      where: { id: ids },
    });
    return result;
  },
};
