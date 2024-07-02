"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./../controllers/user-controller");
const validator_1 = require("../utils/validator");
const route = (0, express_1.Router)(); // domain/api/v1/user
route.get("/", user_controller_1.getAllUsers);
route.post("/signup", (0, validator_1.validate)(validator_1.signupValidator), user_controller_1.userSignup);
route.post("/login", (0, validator_1.validate)(validator_1.loginValidator), user_controller_1.userLogin);
exports.default = route;
//# sourceMappingURL=user-routes.js.map