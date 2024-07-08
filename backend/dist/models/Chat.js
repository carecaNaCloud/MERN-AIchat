"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const Chat = new Schema({
    role: {
        type: String,
        enum: ["system", "user", "assistant", "tool", "function"],
        require: true,
    },
    content: {
        type: String,
        required: true,
    },
});
exports.default = Chat;
//# sourceMappingURL=Chat.js.map