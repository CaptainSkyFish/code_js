const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect(
  "mongodb+srv://dbUser1:I7agIhE84tD5Fr4Q@mytodocluster.nufemzv.mongodb.net/"
);

const todoSchema = new Schema({
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
