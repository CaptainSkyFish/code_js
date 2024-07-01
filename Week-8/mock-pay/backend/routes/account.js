import express from "express";
import { authMiddleware } from "../authMiddleware.js";
import { Account } from "../db.js";
import mongoose from "mongoose";
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  try {
    const account = await Account.findOne({
      userId: req.userId.userId,
    });

    res.status(200).json({
      balance: account.balance / 100,
    });
  } catch (error) {
    console.error("Error fetching account:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const { amount, to } = req.body;

  const account = await Account.findOne({
    userId: req.userId.userId,
  }).session(session);
  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient Balance!",
    });
  }
  try {
    await Account.findOne({ userId: to }).session(session);
  } catch {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid User Account",
    });
  }

  await Account.updateOne(
    { userId: req.userId.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  try {
    await session.commitTransaction();
    console.log(account.balance);
    res.json({
      message: "Transaction Complete",
    });
  } catch {
    res.json({
      message: "unknown error ocurred while completing transaction",
    });
  }
});

export const accountRouter = router;
