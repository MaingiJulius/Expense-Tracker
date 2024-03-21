import {Request, Response, NextFunction} from "express";
import {validationResult} from "express-validator";


export function handleError(req:Request, res:Response, next:NextFunction){
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.error("Input Validation Error", JSON.stringify(errors));
        return res.status(400).json({
            message: "Unauthorised access input validation field"
        })
    }
    next()
}
