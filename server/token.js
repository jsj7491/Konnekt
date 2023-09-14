const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();
const generateToken = (id) => {
  const newToken = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return newToken;
};

module.exports = generateToken;
