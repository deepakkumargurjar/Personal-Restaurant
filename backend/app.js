import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "https://gujjar-restaurant-git-main-deepakkumargurjars-projects.vercel.app/",
];

// GLOBAL CORS FIX
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Database
dbConnection();

// Error Handler
app.use(errorMiddleware);

export default app;
