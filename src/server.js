require("./db/connection");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const postRouter = require("./post/post.routes");
const userRouter = require("./user/user.routes");

app.use(express.json());
app.use(postRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});