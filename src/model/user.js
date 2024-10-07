import mongoose, { Types } from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
});

export const userModel = mongoose.model("user", userSchema);
