const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("./../db/index");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  username = req.headers.username;
  password = req.headers.password;
  Admin.findOne({
    username: username,
  }).then((data) => {
    if (data) {
      res.json({ msg: "Username was taken." });
    } else {
      Admin.create({
        username: username,
        password: password,
      }).then(() => {
        res.json({
          msg: "Admin created successfully!",
        });
      });
    }
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  //   Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const link = req.body.link;
  Course.findOne({
    title,
  }).then((data) => {
    if (data) {
      res.status(400).json({
        msg: `Course "${title}" already exists.`,
      });
    } else {
      Course.create({
        title,
        description,
        price,
        link,
      }).then((data) => {
        res.json({
          msg: "Course created successfully",
          courseID: data._id,
        });
      });
    }
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;
