import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import morgan from "morgan";
import axios from "axios";
const app = express();
const PORT = process.env.PORT || 3900;

app.use(cors());
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

const profile = {
  email: process.env.USER_EMAIL,
  name: process.env.USER_NAME,
  stack: process.env.USER_STACK,
};

const limiter = rateLimit({
  windowMs: 1000 * 60 * 15,
  limit: 100,
  message: { status: "error", message: "Too many request please try again" },
});

app.get("/me", limiter, async (req, res) => {
  const response = await axios.get("https://catfact.ninja/fact", {
    timeout: 1000 * 5,
  });

  if(response.status !== 200) {
    return res.status(500),json({ status: "error", message: "Cats API failed" });
  } 

  res.json({
    status: "success",
    user: { ...profile },
    timestamp: Date.now(),
    fact: response.data.fact,
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
