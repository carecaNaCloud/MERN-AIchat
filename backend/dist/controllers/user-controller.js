"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userSignup = exports.getAllUsers = void 0;
const User_1 = __importDefault(require("./../models/User"));
const bcrypt_1 = require("bcrypt");
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User_1.default.find();
        res.status(200).json({ users });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Can not connect to database" });
    }
};
exports.getAllUsers = getAllUsers;
const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User_1.default.findOne({ email });
        if (userExists) {
            throw new Error('User already exists');
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 13);
        const user = new User_1.default({ name, email, password: hashedPassword });
        // await user.save();
        const location = 'Location: '.concat(`${req.baseUrl}/${user._id}`);
        res.set({ location });
        res.status(201).json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ "message": "Something went wrong, try again in a few seconds" });
    }
};
exports.userSignup = userSignup;
const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User_1.default.findOne({ email }).exec();
        if (!user) {
            return res.status(401).send("Email or password incorrect");
        }
        const isPasswordCorrect = await (0, bcrypt_1.compare)(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).send("Email or password incorrect");
        }
        return res.status(200).send();
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'ERROR', cause: error.message });
    }
};
exports.userLogin = userLogin;
//# sourceMappingURL=user-controller.js.map