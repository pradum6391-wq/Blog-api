import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

import {
    notFound,
    errorHandler
} from "./middleware/errorMiddleware.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Home route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Blog API",
        version: "1.0.0"
    });
});

// Health check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        status: "Server is running",
        timestamp: new Date().toISOString()
    });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Error handling (must be after API routes)
app.use(notFound);
app.use(errorHandler);

export default app;