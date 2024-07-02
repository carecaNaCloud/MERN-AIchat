import { NextFunction, Request, Response } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
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


export const loginValidator = [
  body("email").trim().isEmail().withMessage('Valid email is required'),
  body("password").trim().isLength({min: 8}).withMessage("Password should contains at least 8 characteres")
];

export const signupValidator = [
  body("name").trim().notEmpty().withMessage('Name is required'),
  ...loginValidator
];