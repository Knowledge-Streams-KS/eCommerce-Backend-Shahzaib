const cartItemsService = require("../../Services/cartItemsService");
module.exports = async function (req, res) {
  const data = await cartItemsService.updateItems(req.body);
  res.send(data);
};
