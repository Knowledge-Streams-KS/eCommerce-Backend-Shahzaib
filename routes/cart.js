var express = require("express");
var router = express.Router();

/* GET users listing. */
const {
  addtoCart,
  cartProducts,
  cartProductbyId,
  removefromCart,
  updateCart,
} = require("../Controller/index");
// router.get("/login", login);
router.post("/addtoCart", addtoCart);
router.get("/cartProducts", cartProducts);
router.get("/cartProductbyId", cartProductbyId);
router.put("/updateCart", updateCart);
router.delete("/removefromCart", removefromCart);
module.exports = router;
