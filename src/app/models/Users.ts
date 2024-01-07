import mongoose, { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    userRoll: {
      type: String,
      default: "user",
    },
    password: {
      type: String,
      validate: {
        validator: function (password: string | any[]) {
          return password.length >= 8;
        },
        message: "Password must be at least 8 characters long.",
      },
    },
    emailVerified: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
