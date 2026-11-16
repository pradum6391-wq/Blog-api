import express from "express";
import { body } from "express-validator";

import {
    registerUser,
    loginUser
} from "../controllers/authController.js";

import validate from "../middleware/validate.js";

const router = express.Router();

// Register validation
router.post(
    "/register",
    [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("Name is required")
            .isLength({ min: 2 })
            .withMessage("Name must contain at least 2 characters"),

        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Please enter a valid email"),

        body("password")
            .notEmpty()
            .withMessage("Password is required")
            .isLength({ min: 6 })
            .withMessage("Password must contain at least 6 characters")
    ],
    validate,
    registerUser
);

// Login validation
router.post(
    "/login",
    [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Please enter a valid email"),

        body("password")
            .notEmpty()
            .withMessage("Password is required")
    ],
    validate,
    loginUser
);

export default router;