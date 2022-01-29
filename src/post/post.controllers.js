const Post = require("./post.model");

exports.addPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).send({ message: "Success", movie });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};

exports.listPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).send({ posts });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { title: req.body.title },
            { $set: { actor: req.body.actor } },
            { new: true }
        );
        res.status(200).send({ message: "Success", updatedPost });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({ title: req.params.title });
        res.status(200).send({ message: "Success", deletedPost });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};
