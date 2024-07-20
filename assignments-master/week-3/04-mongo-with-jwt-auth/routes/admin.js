const { Router } = require("express");
const { Admin, User, Course } = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { KEY } = require("../secret");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const response = await Admin.findOne({
    username,
  });
  if (response) {
    res.json({ msg: `Admin ${username} already exists!` });
  } else {
    Admin.create({
      username,
      password,
    }).then(() => {
      res.json({
        msg: "Signed up successfully!",
      });
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const response = await Admin.findOne({
    username,
    password,
  });
  if (response) {
    const token = jwt.sign({ username }, KEY);
    res.json({
      msg: "Signed in successfully.",
      token,
    });
  } else {
    res.status(401).json({
      msg: "Invalid credentials!",
    });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const link = req.body.link;

  Course.create({
    title,
    description,
    price,
    link,
  }).then(() => {
    res.json({
      msg: "New course added successfully!",
    });
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json({ courses });
});

module.exports = router;
