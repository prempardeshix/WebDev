const express = require("express");
const userRouter = express.Router();
const { User, Accounts } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const zod = require("zod");
const { auther } = require("../middleware");

function validateSignup(input) {
  const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    lastName: zod.string(),
    firstName: zod.string(),
  });
  return signupSchema.safeParse(input);
}

function validateSignin(input) {
  const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
  });
  return signinSchema.safeParse(input);
}

function validateUpdate(input) {
  const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
  });
  return updateSchema.safeParse(input);
}

userRouter.post("/signup", async (req, res) => {
  const response = validateSignup(req.body);
  const exists = await User.findOne({
    username: req.body.username,
  });
  if (response.success && !exists) {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    await Accounts.create({
      userID: user._id,
      balance: Math.floor(Math.random() * 1000),
    });
    const token = jwt.sign({ userID: user._id }, JWT_SECRET);
    res.status(200).json({
      message: "User created successfully",
      token,
    });
  } else {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { success } = validateSignin(req.body);
  const exists = await User.findOne({
    username,
    password,
  });
  if (exists && success) {
    const token = jwt.sign(exists._id, JWT_SECRET);
    res.status(200).json({ token });
  } else {
    res.status(411).json({
      message: "Error while logging in",
    });
  }
});

userRouter.put("/update", auther, (req, res) => {
  const { success } = validateUpdate(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
    return;
  }
  const userID = req.userID;
  User.updateOne({ _id: userID }, req.body).then(() => {
    res.json({
      message: "Updated successfully",
    });
  });
});

userRouter.get("/bulk", async (req, res) => {
  let filter = req.query.filter;
  if (filter == undefined) filter = "";
  const response = await User.find({
    $or: [{ firstName: { $regex: filter } }, { lastName: { $regex: filter } }],
  });
  res.json({
    users: response.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = userRouter;
