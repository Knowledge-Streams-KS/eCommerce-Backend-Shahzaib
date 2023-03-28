const { models } = require("../model/definition");
const jwtSecret = require("../config.json");
const jwt = require("jsonwebtoken");
let refreshToken = [];
module.exports = {
  createRole: async function (body) {
    const result = await models.Roles.create(body);
    return result;
  },
  login: async function (body) {
    let user = await models.User.findOne({
      where: {
        userName: body.userName,
      },
    });
    user = user.dataValues;
    const accessToken = generateAccessToken(user);
    const token = jwt.sign(user, jwtSecret.jwt.secret);
    refreshToken.push(token);
    return { accessToken: accessToken, refreshToken: token };
  },

  logout: async function (body) {
    refreshToken = refreshToken.filter((token) => token !== body.token);
    return { refreshToken: refreshToken };
  },
};
function generateAccessToken(user) {
  return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: "3000s" });
}
