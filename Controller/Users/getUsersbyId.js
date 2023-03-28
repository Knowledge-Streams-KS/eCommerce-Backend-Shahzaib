const userService = require("../../Services/userService");
module.exports = async function (req, res) {
  const data = await userService.getUsersbyId(req.query.ids);
  res.send(data);
};
