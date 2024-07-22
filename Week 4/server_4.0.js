const express = require("express");
const bodyParser = require('body-parser');
// const cors = require("cors");
const app = express();
// app.use(cors());
const path = require("path");

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/simpleInterest.html"));
})

const todos = [{
  id: 1,
  title: "Todo 1",
  description: "This is todo 1",
  completed: false,
}, {
  id: 2,
  title: "Todo 2",
  description: "This is todo 2",
  completed: false,
}, {
  id: 3,
  title: "Todo 3",
  description: "This is todo 3",
  completed: false,

}, {
  id: 4,
  title: "Todo 4",
  description: "This is todo 4",
  completed: false,
}, {

  id: 5,
  title: "Todo 5",
  description: "This is todo 5",
  completed: false,
}]

app.get("/todo", (req, res) => {
  const todo = todos.find(t => t.id == req.query.id);
  res.json({
    todo
  })
})

app.get("/todos", (req, res) => {
  const randomTodos = [];
  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
      randomTodos.push(todos[i]);
    }
  }
  res.json({
    todos: randomTodos,
  })
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString());
});

app.post("/interest", (req, res) => {
  const { principal, rate, time } = req.body;
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.json({
    total: total,
    interest: interest,
  })

});

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
  res.json({
    network: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    notifications: getRandomNumber(10)
  })

})