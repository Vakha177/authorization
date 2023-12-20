const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json("Вы не авторизированы");
  }
  const [type, token] = authorization.split(" ");
  console.log(type);

  if (type !== "Bearer") {
    return res.status(401).json("Неверный тип токена");
  }

  try {
    req.user = await jwt.verify(token, process.env.SECRET_JWT);
    next();
  } catch (e) {
    return res.status(401).json("Неверный токен2");
  }
};
