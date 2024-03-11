const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "somePassKey";
const path = require('path');
const bcrypt = require('bcrypt');
mongoose.connect(
  "mongodb+srv://master:HpTf5jtx6NtVYcGd@clusterzero.8k7kmx5.mongodb.net/",
);

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const User = mongoose.model("Users", {
  name: String,
  username: String,
  password: String,
});

async function userExists(username) {
  try {
  const data = await User.findOne({ username: username });
  if(data) return true;
  else return false
  } catch (err) {
  console.error(err);
  return false; 
  }
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/UserIndex.html"));
  })

  app.get("/welcomeUser", (req, res) => {
    res.sendFile(path.join(__dirname, "/welcome.html"));
  })

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;

  if (await userExists(username)){
    res.status(400).json({msg: "User already exists. Try signing in"});
  }
  else {
    const user = new User({
      name,
      username,
      password,
    });

    var token = jwt.sign({ username: username }, jwtPassword);
    await user.save().then(() =>{
    res.json({
      token,
      msg:"User created successfully."
    })
  });
}
});

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const userExists =await User.findOne({ username: username });
  if (!userExists) {
    return res.status(403).json({
      msg: `User doesn't exist in our DB. Try signing up.`,
    });
  }
  else{
    const userDetails = await User.findOne({ username, password });
    if (!userDetails) {
      return res.status(409).json({
        msg: "Incorrect password. Please try again.",
      });
    }
  }
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token
  });
});

app.get("/users", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const users = await User.find({
      username: { $ne: username },
    })
    res.json(users);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});


app.get("/getName", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const user = await User.find({
      username,
    })
    res.json(user[0].name);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});