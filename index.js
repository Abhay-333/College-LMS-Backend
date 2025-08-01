import dotenv from "dotenv";
import express from "express";
import dbConnection from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://college-lms-frontend.onrender.com", // frontend url
      "http://localhost:5173", // local url for testing
    ],
    credentials: true,
  })
);

app.use("/api", authRouter);

app.listen(process.env.PORT || 5000, () => {
  dbConnection();
});
