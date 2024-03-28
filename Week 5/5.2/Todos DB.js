const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://dbUser1:I7agIhE84tD5Fr4Q@mytodocluster.nufemzv.mongodb.net/"
);

const todoSchema = Schema({
  title: String,
  description: String,
  finished: {
    type: Boolean,
    default: false,
  },
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
