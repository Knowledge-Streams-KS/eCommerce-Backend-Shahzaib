var express = require("express");
var router = express.Router();

/* GET users listing. */
const {
  addItems,
  getItems,
  getItemsbyId,
  removeItems,
  updateItems,
} = require("../Controller/index");
// router.get("/login", login);
router.post("/addItems", addItems);
router.get("/getItems", getItems);
router.get("/getItemsbyId", getItemsbyId);
router.put("/updateItems", updateItems);
router.delete("/removeItems", removeItems);
module.exports = router;
