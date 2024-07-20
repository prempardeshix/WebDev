const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { Admin, User, Course } = require("../db/index");
const { KEY } = require("../secret");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.headers.username;
  const password = req.headers.password;

  const response = await User.findOne({
    username,
  });
  if (response) {
    res.status(401).json({
      msg: `User ${username} already exists!`,
    });
  } else {
    User.create({
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
  const username = req.headers.username;
  const password = req.headers.password;

  const response = User.findOne({
    username,
    password,
  });
  if (response) {
    const token = jwt.sign({ username }, KEY);
    res.json({
      msg: "Signed in successfully!",
      token,
    });
  } else {
    res.status(401).json({
      msg: "Invalid credentials!",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.findOne({});
  res.json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseID = req.params.courseId;

  User.updateOne(
    { username },
    {
      $push: {
        purchased: courseID,
      },
    }
  );
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const user = await User.findOne({ username });
  const purchased = user.purchased;
  res.json({
    purchased,
  });
});

module.exports = router;
