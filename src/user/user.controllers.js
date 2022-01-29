const User = require("./user.model");
const jwt = require("jsonwebtoken");

exports.addUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        const token = await User.generateAuthToken();
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};

exports.listUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { username: req.body.username },
            { $set: { email: req.body.email } },
            { new: true }
        );
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};

exports.deletedUser = async (req, res) => {
    try {
        const deleteUser = await User.deleteOne({ username: req.params.username });
        res.status(200).send({ message: "Success", deleteUser });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};

exports.logIn = async (req, res) => {
    try {
        const token = await req.user.generateAuthToken();
        res.status(200).send({ user: req.user.username, token });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};

exports.tokenCheck = async (req, res) => {
    try {
        const token = req.header("Authorization").replace("Bearer", "");
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const user = await User.findById(decodedToken._id);
        res.status(200).send({ username: user.username });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};