const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    post: {
        type: String,
        default: "What's on your mind?"
    },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;