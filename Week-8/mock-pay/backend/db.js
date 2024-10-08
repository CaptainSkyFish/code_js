import mongoose from "mongoose";
import bcrypt from "bcrypt";
mongoose
  .connect("mongodb://127.0.0.1:27017/mock-pay")
  .then(console.log(`connection to mongoDB established.`));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password_hash: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
    maxLength: 50,
  },
});

userSchema.statics.createHash = async function (plainTextPassword) {
  const saltRounds = 8;
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(plainTextPassword, salt);
};

userSchema.methods.validatePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password_hash);
};

export const User = mongoose.model("User", userSchema);

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: Number.isInteger,
      message: `value is not an Integer`,
    },
  },
});

export const Account = mongoose.model("Account", accountSchema);
