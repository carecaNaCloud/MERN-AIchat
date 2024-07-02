"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const crypto_1 = require("crypto");
const { Schema } = mongoose_1.default;
const Chat = new Schema({
    id: {
        type: String,
        default: (0, crypto_1.randomUUID)()
    },
    role: {
        type: String,
        require: true
    },
    content: {
        type: String,
        required: true
    }
});
exports.default = Chat;
//# sourceMappingURL=Chat.js.map