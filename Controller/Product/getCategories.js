const productService = require("../../Services/productService");
module.exports = async function (req, res) {
  const data = await productService.getCategories(req.body);
  res.send(data);
};