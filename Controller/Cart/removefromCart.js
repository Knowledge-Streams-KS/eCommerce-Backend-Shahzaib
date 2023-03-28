const cartService = require("../../Services/cartService");
module.exports = async function (req, res) {
  const data = await cartService.removefromCart(req.query.ids);
  res.send(data);
};
