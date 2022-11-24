import express from "express";
import {
  addUser,
  getUsers,
  getUser,
  editUser,
  deleteUser,
} from "../controller/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addUser);

router.get("/all", authMiddleware, getUsers);

router.get("/:id", authMiddleware, getUser);

router.put("/:id", authMiddleware, editUser);

router.delete("/:id", authMiddleware, deleteUser);

export default router;
