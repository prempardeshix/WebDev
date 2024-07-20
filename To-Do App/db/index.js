const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pardeshiprem283:U1CiPwhcXgGl7tR9@cluster0.rejrdo9.mongodb.net/todo"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };
