
import Post from "../models/Post.js";
import mongoose from "mongoose";

// CREATE POST
export const createPost = async (req, res, next) => {
    try {
        const { title, content, category, tags } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required"
            });
        }

        const post = await Post.create({
            title,
            content,
            category,
            tags,
            author: req.user._id
        });

        res.status(201).json({
            success: true,
            message: "Post created successfully",
            post
        });

    } catch (error) {
        next(error);
    }
};

// GET ALL POSTS
export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find()
            .populate("author", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: posts.length,
            posts
        });

    } catch (error) {
        next(error);
    }
};

// GET SINGLE POST
export const getSinglePost = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid post ID"
            });
        }

        const post = await Post.findById(id)
            .populate("author", "name email");

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        res.status(200).json({
            success: true,
            post
        });

    } catch (error) {
        next(error);
    }
};

// UPDATE POST
export const updatePost = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid post ID"
            });
        }

        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        // Check post ownership
        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not allowed to update this post"
            });
        }

        const { title, content, category, tags } = req.body;

        if (title !== undefined) post.title = title;
        if (content !== undefined) post.content = content;
        if (category !== undefined) post.category = category;
        if (tags !== undefined) post.tags = tags;

        await post.save();

        res.status(200).json({
            success: true,
            message: "Post updated successfully",
            post
        });

    } catch (error) {
        next(error);
    }
};

// DELETE POST
export const deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid post ID"
            });
        }

        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        // Check post ownership
        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not allowed to delete this post"
            });
        }

        await post.deleteOne();

        res.status(200).json({
            success: true,
            message: "Post deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};
