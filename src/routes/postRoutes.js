import express from "express";
import { body } from "express-validator";

import {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost
} from "../controllers/postController.js";

import protect from "../middleware/authMiddleware.js";
import validate from "../middleware/validate.js";

const router = express.Router();

// Public routes
router.get("/", getAllPosts);
router.get("/:id", getSinglePost);

// Create post
router.post(
    "/",
    protect,
    [
        body("title")
            .trim()
            .notEmpty()
            .withMessage("Post title is required")
            .isLength({ max: 150 })
            .withMessage("Title cannot exceed 150 characters"),

        body("content")
            .trim()
            .notEmpty()
            .withMessage("Post content is required")
    ],
    validate,
    createPost
);

// Update post
router.put(
    "/:id",
    protect,
    [
        body("title")
            .optional()
            .trim()
            .notEmpty()
            .withMessage("Title cannot be empty")
            .isLength({ max: 150 })
            .withMessage("Title cannot exceed 150 characters"),

        body("content")
            .optional()
            .trim()
            .notEmpty()
            .withMessage("Content cannot be empty")
    ],
    validate,
    updatePost
);

// Delete post
router.delete("/:id", protect, deletePost);

export default router;