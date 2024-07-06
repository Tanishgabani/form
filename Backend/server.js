import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/db.js";
import cors from "cors";

const app = express();

dotenv.config();

// Middleware
app.use(express.json());

// // CORS Configuration
// app.use(
//   cors({
//     origin: ["https://form-87ig.vercel.app/"],
//     methods: ["POST", "GET", "OPTIONS"],
//     credentials: true,
//   })
// );

// app.options("*", cors());

// DB Connection
connectDB();

// Routes
import userRoute from "./Route/user.route.js";

app.use("/api/user", userRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running at port ${process.env.PORT || 8000}`);
});
