const productService = require("../../Services/productService");
module.exports = async function (req, res) {
  const data = await productService.getProductbyCategory(req.query);
  res.send(data);
};
