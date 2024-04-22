const mongoose = require("mongoose");
mongoose.connect(
  "your url/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
