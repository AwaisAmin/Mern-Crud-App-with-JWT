import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import connection from "./database/db.js";
import router from "./routes/route.js";
import authRouter from "./routes/authRoute.js";

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", authRouter);
app.use("/", router);

const port = process.env.PORT || 4500;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

app.listen(port, () =>
  console.log(`Server is Running at port: http://localhost:${port}`)
);
