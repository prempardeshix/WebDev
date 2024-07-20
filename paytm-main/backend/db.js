const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://"
);

const userSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
});

const accSchema = mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  balance: Number,
});

const User = mongoose.model("User", userSchema);
const Accounts = mongoose.model("Accounts", accSchema);

module.exports = { User, Accounts };
