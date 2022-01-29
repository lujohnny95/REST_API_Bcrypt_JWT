const { Router } = require("express");
const postRouter = Router();
const { addPost, listPosts, updatePost, deletePost } = require("./post.controllers");

postRouter.post("/post", addPost);
postRouter.get("/post", listPosts);
postRouter.put("/post", updatePost);
postRouter.delete("/movie/:title", deletePost);

module.exports = postRouter;