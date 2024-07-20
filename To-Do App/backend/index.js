const express = require("express");
const app = express();
const { schemaPost, schemaPut } = require("./types");
const { todo } = require("../db/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({ todos });
});

app.post("/todos", function (req, res) {
  const isValid = schemaPost.safeParse(req.body);
  if (isValid.success) {
    todo
      .create({
        title: req.body.title,
        description: req.body.description,
        completed: false,
      })
      .then(res.json({ msg: "Todo added successfully!" }));
  } else {
    res.status(401).json({
      msg: "Improper input format!",
    });
    return;
  }
});

app.put("/completed", async function (req, res) {
  const isValid = schemaPut.safeParse(req.body);
  if (isValid.success) {
    todo
      .updateOne(
        { _id: req.body.id },
        {
          completed: true,
        }
      )
      .then(() => {
        res.json({
          msg: "Marked as completed.",
        });
      });
  } else {
    res.status(401).json({
      msg: "Improper input format!",
    });
    return;
  }
});

app.listen(3000, () => {
  console.log("Listening");
});
