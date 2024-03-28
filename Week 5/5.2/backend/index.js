const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const app = express();
const { createTodo, updateTodo } = require("../types");
const { todo } = require("../Todos DB");

app.use(express.json());
app.use(bodyparser.json);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}.`);
});

app.post("/todo", async (req, res) => {
  //C
  const createData = req.body;
  const parseData = createTodo.safeParse("createData");
  if (!parseData.success) {
    res.status(411).json({ message: "Invalid Input" });
  }
  await todo.create({
    title: createData.title,
    description: createData.description,
  });
  res.json({
    message: "New Todo Created.",
  });
});

app.get("/todos", async (req, res) => {
  //R
  const todoList = await todo.find({});
  res.json({
    todos: todoList,
  });
});

app.put("/todo/id", async (req, res) => {
  //U
});

app.put("/complete", async (req, res) => {
  const updateData = req.body;
  const parseData = createTodo.safeParse("updateData");
  if (!parseData.success) {
    res.status(411).json({ message: "Failed!" });
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      finished: true,
    }
  );
  res.status(211).send();
});

app.delete("/todo/id", (req, res) => {
  //D
});
