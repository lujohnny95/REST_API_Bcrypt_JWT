const { Router } = require("express");
const { hashPassword, decryptPassword } = require("../middleware");
const { addUser, logIn, listUser, updateUser, deletedUser, tokenCheck } = require("./user.controllers");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/user/login", decryptPassword, logIn);
userRouter.get("/user/:username", listUser);
userRouter.put("/user", updateUser);
userRouter.delete("/user/:username", deletedUser);
userRouter.get("/user", tokenCheck);

module.exports = userRouter;
