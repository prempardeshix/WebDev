const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Listnening!");
});
app.use(express.json());

const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://pardeshiprem283:U1CiPwhcXgGl7tR9@cluster0.rejrdo9.mongodb.net/newusersdatabase"
);
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const modelName = new mongoose.model("collectionName", userSchema);

app.post("/signup", async function (req, res) {
  const thisname = req.body.name;
  const thisemail = req.body.email;
  const thispassword = req.body.password;
  const exists = await modelName.findOne({ email: thisemail });
  if (exists) {
    res
      .status(400)
      .json({ msg: "Email ID is already linked to another user!" });
  } else {
    const user = new modelName({
      name: thisname,
      email: thisemail,
      password: thispassword,
    });
    user.save();
    const token = jwt.sign(
      {
        name: thisname,
        email: thisemail,
        password: thispassword,
      },
      jwtPassword
    );
    res.json({ msg: "New user saved successfully.", token: token });
  }
});

app.post("/signin", function (req, res) {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  const email = decoded.email;
  const name = decoded.name;
  const password = decoded.password;
  res.json({
    name: name,
    email: email,
    password: password,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  const tokenizedEmail = decoded.email;
  const exists = modelName.findOne({ email: tokenizedEmail });
  if (exists) {
    res.json({ msg: "hi" });
  } else {
    res.send("Invalid token!");
  }
});
