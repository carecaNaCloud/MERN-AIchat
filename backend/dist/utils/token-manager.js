"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_js_1 = require("./constants.js");
const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
};
exports.createToken = createToken;
const verifyToken = async (req, res, next) => {
    const token = req.signedCookies[`${constants_js_1.AUTH_COOKIE}`];
    if (!token || token.trim() === "") {
        return res.status(401).json({ message: "Token Not Received" });
    }
    return new Promise((resolve, reject) => {
        return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                reject(err.message);
                return res.status(401).json({ message: "Invalid Token" });
            }
            else {
                resolve();
                res.locals.jwtData = decoded;
                return next();
            }
        });
    });
};
exports.verifyToken = verifyToken;
// return new Promise<void>((resolve, reject) => {
//   return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
//     if (err) {
//       reject(err.message);
//       return res.status(401).json({ message: "Token Expired" });
//     } else {
//       resolve();
//       res.locals.jwtData = success;
//       return next();
//     }
//   })
// })
//# sourceMappingURL=token-manager.js.map