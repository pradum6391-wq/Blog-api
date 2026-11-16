
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Post title is required"],
            trim: true,
            maxlength: 150
        },

        content: {
            type: String,
            required: [true, "Post content is required"]
        },

        category: {
            type: String,
            default: "General",
            trim: true
        },

        tags: {
            type: [String],
            default: []
        },

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
