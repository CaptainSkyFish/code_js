import express from "express";
import { authMiddleware } from "../authMiddleware.js";
import { Account } from "../db.js";
import mongoose from "mongoose";
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.status(200).json({
    Balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const { amount, to } = req.body;

  const account = Account.findOne({ userId: req.userId }).session(session);
  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient Balance!",
    });
  }

  const toAccount = Account.findOne({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid User Account",
    });
  }

  await Account.updateOne(
    { userId: account },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: toAccount },
    { $inc: { balance: amount } }
  ).session(session);
  try {
    await session.commitTransaction();
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
