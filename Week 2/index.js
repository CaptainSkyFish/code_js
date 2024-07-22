const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get("/", (req, res) => {
  res.send("HI THERE! WELCOME.")
})

app.use(bodyParser.json());

// app.get("/handleSum", (req, res) => {
app.get("/handleSum", (req, res) => {        //get, post, put, delete----request methods
  const limit = req.query.limit;               //body
  // const limit = req.headers.limit;         //headers
  // const limit = req.query.limit;           //query parameters
  var answerObj = {
    sum : sum(limit),
    mul : Mul(limit)
  }
  res.send(answerObj);
});

app.get("/getPage", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function sum(counter){
    var i = 0; var sum = 0;
    while(i <= counter){
        sum += i;
        i++;
    }
    return sum;
}

function Mul(counter){
  var i = 1; var mul = 1;
  while(i <= counter){
      mul *= i;
      i++;
  }
  return mul;
}