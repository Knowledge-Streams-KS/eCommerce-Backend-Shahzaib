const cartService = require("../../Services/cartService");
module.exports = async function (req, res) {
  const data = await cartService.cartProductbyId(req.query.ids);
  res.send(data);
};
