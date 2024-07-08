"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateChatCompletion = void 0;
const User_1 = __importDefault(require("../models/User"));
const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User_1.default.findById(res.locals.jwtData.id);
        if (!user) {
            return res
                .status(401)
                .json({ message: "User not authorized" });
        }
        const chats = user.chats.map(({ role, content }) => ({
            role, content
        }));
        chats.push({ role: "user", content: message });
        user.chats.push({ role: "user", content: message });
        // const chatResponse = await openAI.chat.completions.create({
        //   messages: chats,
        //   model: "gpt-3.5-turbo"
        // })
        console.log(chatResponse);
    }
    catch (error) {
        console.log(error);
    }
};
exports.generateChatCompletion = generateChatCompletion;
//# sourceMappingURL=chat-controller.js.map