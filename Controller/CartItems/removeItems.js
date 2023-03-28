const cartItemsService = require("../../Services/cartItemsService");
module.exports = async function (req, res) {
  const data = await cartItemsService.removeItems(req.query.ids);
  res.send(data);
};
