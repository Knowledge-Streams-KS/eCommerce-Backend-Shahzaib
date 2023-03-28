const commonService = require("../../Services/commonService");
module.exports = async function (req, res) {
  const data = await commonService.createRole(req.body);
  res.send(data);
};
