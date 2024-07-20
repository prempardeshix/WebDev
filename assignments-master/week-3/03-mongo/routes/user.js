const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("./../db/index");
const { default: mongoose } = require("mongoose");
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.headers.username;
  const password = req.headers.password;
  const response = await User.findOne({
    username,
  });
  if (response) {
    res.status(400).json({
      msg: "User Already Exists",
    });
  } else {
    User.create({
      username,
      password,
    });
    res.json({
      msg: "User created successfully",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const courseID = req.params.courseId;
  const response = await User.findOne({
    username,
  });
  if (response) {
    User.updateOne(
      {
        username,
      },
      {
        $push : {
          purchased: courseID,
        },
      }
    ).then(() =>
      res.json({
        msg: "Purchase Complete!",
      })
    );
  } else {
    res.json({
      msg: "Kuch toh gadbad hai Daya!",
    });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const response = await User.findOne({
    username,
  });
  if (!response) {
    res.json({
      msg: `User "${username}" does not exist`,
    });
  } else {
    res.json({
      courses: response.purchased,
    });
  }
});

module.exports = router;
