const cartItemsService = require("../../Services/cartItemsService");
module.exports = async function (req, res) {
  const data = await cartItemsService.getItems(req.body);
  res.send(data);
};
