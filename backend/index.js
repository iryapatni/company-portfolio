import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import projectRoutes from "./routes/projectRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://company-portfolio-brown.vercel.app"
    ],
    credentials: true,
  })
);


app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 8080;

// ✅ Connect DB FIRST, then start server ONCE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
