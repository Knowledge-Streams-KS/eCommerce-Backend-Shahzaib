const productService = require("../../Services/productService");
module.exports = async function (req, res) {
  const data = await productService.getProductbyId(req.query.ids);
  res.send(data);
};
