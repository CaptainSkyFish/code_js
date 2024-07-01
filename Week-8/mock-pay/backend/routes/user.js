import express from "express";
import { Account, User } from "../db.js";
import { JWT_SECRET } from "../config.js";
import zod from "zod";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../authMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    msg: "Hello there from user1",
  });
});

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string().optional(),
  password: zod.string().min(8),
  confirmPassword: zod.string().min(8),
});

const existingUser = async (user_name) => {
  return await User.findOne({ username: user_name });
};

router.post("/signup", async (req, res) => {
  if (await existingUser(req.body.username)._id) {
    //check existing user
    return res.status(411).json({
      message: "Username already exists. Redirecting to Signin page in ....",
    });
  }

  const { success } = signupBody.safeParse(req.body); //parse signupbody
  if (!success) {
    return res.status(411).json({
      message: "Invalid Credentials. Please try again.",
    });
  }
  const newUser = new User({
    //creating new user in db
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  newUser.password_hash = await User.createHash(req.body.password); //hash password

  //store user in db
  await newUser.save();
  const userId = newUser._id;
  const token = jwt.sign({ userId }, JWT_SECRET); //generate session token

  await Account.create({
    userId,
    balance: (1 + Math.random() * 10000).toFixed(2) * 100,
  });
  //res
  return res.status(200).json({
    message: `Welcome ${req.body.firstName}`,
    token: token,
  });
});

const signinbody = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8),
});

router.post("/signin", async (req, res) => {
  const { success } = signinbody.safeParse(req.body); //parse signinbody
  if (!success) {
    return res.status(411).json({
      message: "Please enter valid credentials.",
    });
  }

  const { username, password } = req.body; //Validate Existing User
  const user = await existingUser(username);
  if (!user) {
    return res
      .status(411)
      .json("You are not a user yet. Redirecting to signup page in ....");
  }

  //Validate Pass
  if (!(await user.validatePassword(password))) {
    return res.status(411).json({
      message: "Incorrect Password!",
    });
  }

  //generate session token
  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  );

  //res
  return res.status(200).json({
    message: `Welcome back, ${user.firstName}`,
    token: token,
  });
});

const updateBody = zod
  .object({
    password: zod.string().optional(),
    confirmPassword: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  );

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    return res.status(403).json({
      message: "Invalid Credentials!",
    });
  }
  const { userId } = req.body;
  const user = await User.findById(userId);

  if (req.body.firstName) user.firstName = req.body.firstName;
  if (req.body.lastName) user.lastName = req.body.lastName;
  if (req.body.password) {
    user.password_hash = await user.createHash(req.body.password);
  }

  await user.save();
  res.json({
    message: "User information updated successfully!",
  });
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

export const userRouter = router;
