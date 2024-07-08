"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_1 = require("./../utils/validator");
const token_manager_1 = require("../utils/token-manager");
const chat_controller_1 = require("../controllers/chat-controller");
const route = (0, express_1.Router)();
route.post("/new", (0, validator_1.validate)(validator_1.chatCompletion), token_manager_1.verifyToken, chat_controller_1.generateChatCompletion);
exports.default = route;
//# sourceMappingURL=chat-router.js.map