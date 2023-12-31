const { JsonWebToken} = require("jsonwebtoken");
const User = require("../moduls/User.modules");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.usersControllers = {
  getAllUsers: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },
  registerUser: async (req, res) => {
    console.log(process.env.BCRYPT_ROUNDS);
    const { login, password } = req.body;
    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));

     const user = await User.create({ login: login, password: hash });
     res.json(user);
    
    },
  
  login: async (req, res) => {
    const {login, password} = req.body;
    
    const candidate = await User.findOne({ login });
    if (!candidate) {
      return res.status(401).json("Не верный логин");
    }
    const valid = await bcrypt.compare(password, candidate.password);
    if (!valid) { 
      return res.status(401).json({error: "Неверный пароль"});
    }

    const payload = {
      id: candidate._id
    };
    const token = await jwt.sign(payload, process.env.SECRET_JWT, {
      expiresIn: "24h",
    });
    res.json({token});
  },
};
