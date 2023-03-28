const productService = require("../../Services/productService");
module.exports = async function (req, res) {
  const data = await productService.removeProduct(req.query.ids);
  res.send(data);
};
