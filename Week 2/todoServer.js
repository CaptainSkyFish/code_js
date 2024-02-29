const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// var todos = [];
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) =>{
    if(err) throw err;
    res.status(200).json(JSON.parse(data));
  });
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) =>{
    if(err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id.toString().replace(/[^0-9]/g, '')));
    if(todoIndex === -1)
        res.status(404).send();
    else{
        res.json(todos[todoIndex]);
    }
  });
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id : Math.floor(Math.random() * 100000),
    title: req.body.title,
    description: req.body.description
};
  fs.readFile("todos.json", "utf-8", (err, data) =>{
    if(err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), "utf8", (err) => {
      if(err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

app.put("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
  if (err) throw err;
  const todos = JSON.parse(data);
  const todoIndex = findIndex(todos, parseInt(req.params.id.toString().replace(/[^0-9]/g, '')));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    const updatedTodo = {
      id: todos[todoIndex].id,
      title: req.body.title,
      description: req.body.description
    };
    todos[todoIndex] = updatedTodo;
    fs.writeFile("todos.json", JSON.stringify(todos), "utf8", (err) => {
      if (err) throw err;
      res.status(200).json(updatedTodo);
    });
  }
});
});

app.delete("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id.toString().replace(/[^0-9]/g, '')));
    if(todoIndex === -1)
      res.status(404).send();
    else{
        todos.splice(todoIndex, 1);
        fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
          if(err) throw err;
          res.status(200).send();
        })
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/TODO app/index.html"));
})

app.use((req, res, next) => {
    res.status(404).send();
  });

  function findIndex(arr, id) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id){
        return i;
      }      
    }
    return -1;
  }

// module.exports = app;