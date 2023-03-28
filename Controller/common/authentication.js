const commonService = require("../../Services/commonService");
module.exports = async function (req, res) {
  const data = await commonService.login(req.body);
  res.send(data);
};
