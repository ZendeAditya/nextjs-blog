import mongoose, { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new Schema({
  username: {
    type: String,
    unique: String,
  },
  email: {
    type: String,
    unique: String,
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
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
