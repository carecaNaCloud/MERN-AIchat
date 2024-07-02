"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupValidator = exports.loginValidator = exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (validations) => {
    return async (req, res, next) => {
        // sequential processing, stops running validations chain if one fails.
        for (const validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                return res.status(422).json({ errors: result.array() });
            }
        }
        next();
    };
};
exports.validate = validate;
exports.loginValidator = [
    (0, express_validator_1.body)("email").trim().isEmail().withMessage('Valid email is required'),
    (0, express_validator_1.body)("password").trim().isLength({ min: 8 }).withMessage("Password should contains at least 8 characteres")
];
exports.signupValidator = [
    (0, express_validator_1.body)("name").trim().notEmpty().withMessage('Name is required'),
    ...exports.loginValidator
];
//# sourceMappingURL=validator.js.map