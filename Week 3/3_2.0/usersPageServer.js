const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "somePassKey";
const path = require('path');

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
  Username: String,
  password: String,
});

function userExists(user, pass) {
  return User.findOne({
    username: user,
    password: pass,
  });
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/UserIndex.html"));
  })

  app.get("/welcomeUser", (req, res) => {
    res.sendFile(path.join(__dirname, "/welcome.html"));
  })

app.post("/signup", async (req, res) => {
  const { name, username, password } = req.body;

  if (await userExists(username, password)) 
    res.status(400).send("User already exists");
  else {
    const user = new User({
      name,
      username,
      password,
    });

    await user.save();
    res.send("User created successfully.");
  }
});

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
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
    res.json({
      users: users,
    });
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