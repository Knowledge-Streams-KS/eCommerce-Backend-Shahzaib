var express = require("express");
var router = express.Router();

const { createRole, login, logout } = require("../Controller/index");
// router.get("/login", login);
router.post("/createRole", createRole);
router.post("/login", login);
router.delete("/logout", logout);
module.exports = router;
