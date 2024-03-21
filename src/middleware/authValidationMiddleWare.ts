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
            .trim(),

    ];
}