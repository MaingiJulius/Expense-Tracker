import {Request, Response,NextFunction} from "express";
import {body, ValidationChain, validationResult} from "express-validator";

//validation at login page
export function validateLogin():ValidationChain[] {
    return [
        body ("email")
            .isEmail()
            .withMessage("Invalid Email Address")
            .normalizeEmail(),

        body("password")
            .isLength({min:8})
            .withMessage("Password Must be at least 8 characters long.")
            .matches(/\d/)
            .withMessage("Password must contain at least one digit.")
            .matches(/[!@#$%^(),.":{}|]/)
            .withMessage('Password must contain at least one special character.')
            .trim(),
    ];
}

/**
 * Validate account request fields.
 * @see {@link https://www.npmjs.com/package/express-validator}
 * @see {@link https://express-validator.github.io/docs}
 * @returns {ValidationChain[]} An array of express-validator chains for validating the account creation request.
 */
export function validateAccountCreation():ValidationChain[] {
    return [
        body ("email")
            .isEmail()
            .withMessage("Invalid Email Address")
            .normalizeEmail(),

        body("firstName")
        .isLength({min:3,max:20})
        .withMessage("First Name is required.")
        .matches(/^[a-zA-Z]+$/)
        .withMessage("First Name must contain only alphabetic characters"),

        body("lastName")
            .isLength({min:3,max:20})
            .withMessage("Last Name is required.")
            .matches(/^[a-zA-Z]+$/)
            .withMessage("Last Name must contain only alphabetic characters"),

        body("password")
            .isLength({min:8})
            .withMessage("Password Must be at least 8 characters long.")
            .matches(/\d/)
            .withMessage("Password must contain at least one digit.")
            .matches(/[!@#$%^(),.":{}|]/)
            .withMessage('Password must contain at least one special character.')
            .trim(),
    ];
}