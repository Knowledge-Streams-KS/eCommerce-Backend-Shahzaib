const productService = require("../../Services/productService");
module.exports = async function (req, res) {
  const data = await productService.createBulkProduct(req.body);
  res.send(data);
};
