import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
  },
  {
    versionKey: false,
  }
);

const Auth = mongoose.model("userAuth", authSchema);

export default Auth;
