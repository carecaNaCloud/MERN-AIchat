"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const port = process.env.PORT || 5000;
exports.port = port;
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Remove for production
app.use((0, morgan_1.default)("dev"));
app.use('/api/v1', routes_1.default);
//# sourceMappingURL=app.js.map