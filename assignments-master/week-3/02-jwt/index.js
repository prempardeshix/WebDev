const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

const zod = require("zod");
const emailSchema = zod.string().email();
const passSchema = zod.string().min(6);

function signJwt(username, password) {
  const emailResponse = emailSchema.safeParse(username);
  const passResponse = passSchema.safeParse(password);

  if (!emailResponse.success || !passResponse.success) {
    return null;
  } else {
    const token = jwt.sign({username}, jwtPassword);
    return token;
  }
}

function verifyJwt(token) {
  let flag = true;
  try {
    jwt.verify(token, jwtPassword);
  } catch (e) {
    flag = false;
  }
  return flag;
}

function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) return true;
  else return false;
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
