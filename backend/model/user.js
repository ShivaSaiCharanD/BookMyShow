import mongoose from "mongoose";
import {module} from "node";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    }
  },
  
);

module.exports = mongoose.model("User", userSchema);
