var express = require("express");
var router = express.Router();

/* GET users listing. */
const {
  addProduct,
  getProduct,
  getProductbyId,
  removeProduct,
  updateProduct,
  createBulkProduct,
  getCategories,
  getProductbyCategory,
} = require("../Controller/index");
// router.get("/login", login);
router.post("/addProducts", createBulkProduct);
router.post("/addProduct", addProduct);
router.get("/getProducts", getProduct);
router.get("/getCategories", getCategories);
router.get("/getProductsbyCategory", getProductbyCategory);
router.get("/getProductbyId", getProductbyId);
router.put("/updateProduct", updateProduct);
router.delete("/removeProduct", removeProduct);
module.exports = router;
