const userRouter = require("./user");
const accRouter = require("./acc");

const express = require("express");
const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accRouter);

module.exports = router;
