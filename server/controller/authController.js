import Auth from "../model/authSchema.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const userRegistration = async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  const user = await Auth.findOne({ email: email });

  if (user) {
    res.send({ status: "failed", message: "Email already exists" });
  } else {
    if (name && email && password && confirm_password) {
      if (password === confirm_password) {
        try {
          const salt = await bcrypt.genSalt(12);
          const hashPassword = await bcrypt.hash(password, salt);
          const doc = new Auth({
            name: name,
            email: email,
            password: hashPassword,
          });

          await doc.save();
          const saved_user = await Auth.findOne({ email: email });
          // generating JWT Token
          const token = JWT.sign(
            { userID: saved_user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "30d" }
          );
          res.status(201).send({
            status: "success",
            email: user.email,
            token: token,
          });
        } catch (error) {
          console.error(error);
          res.send({ status: "failed", message: "Unable to Register" });
        }
      } else {
        res.send({ status: "failed", message: "Password is not match" });
      }
    } else {
      res.send({ status: "failed", message: "All fields are required" });
    }
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await Auth.findOne({ email: email });
      if (user != null) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (user.email === email && isMatch) {
          // generating JWT token
          const token = JWT.sign(
            { email: user.email },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "30d" }
          );
          res.send({
            status: "success",
            name: user.name,
            email: user.email,
            token: token,
          });
        } else {
          res.send({
            status: "failed",
            message: "Email/Password is not valid",
          });
        }
      } else {
        res.send({ status: "failed", message: "You are not registered" });
      }
    } else {
      res.send({ status: "failed", message: "All fields are required" });
    }
  } catch (error) {
    console.error(error);
    res.send({ status: "failed", message: "Unable to login" });
  }
};
