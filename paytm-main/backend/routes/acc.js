const express = require("express");
const { User, Accounts } = require("../db");
const accRouter = express.Router();

const { auther } = require("../middleware");

const mongoose = require("mongoose");

accRouter.get("/balance", auther, async (req, res) => {
  const response = await User.findOne({
    _id: req.userID,
  });
  if (response) {
    const acc = await Accounts.findOne({
      userID: req.userID,
    });
    res.status(200).json({
      balance: acc.balance,
    });
  } else {
    res.status(400).json({
      msg: "Invalid Token",
    });
  }
});

accRouter.post("/transfer", auther, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const senderID = req.userID;
  const receiverID = req.body.to;
  const amount = req.body.amount;

  const sender = await Accounts.findOne({
    userID: senderID,
  }).session(session);
  if (sender.balance < amount) {
    return res.status(400).json({
      msg: "Insufficient Balance",
    });
  }

  const receiver = await User.findOne({
    _id: receiverID,
  }).session(session);
  if (!receiver) {
    return res.status(400).json({
      msg: "Invalid credentials",
    });
  } else {
    await Accounts.updateOne(
      { userID: senderID },
      {
        $inc: {
          balance: -amount,
        },
      }
    ).session(session);
    await Accounts.updateOne(
      { userID: receiverID },
      {
        $inc: {
          balance: amount,
        },
      }
    ).session(session);

    await session.commitTransaction();
    res.status(200).json({
      msg: "Transaction Successful!",
    });
  }
});

module.exports = accRouter;
