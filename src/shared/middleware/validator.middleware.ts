import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { Request, Response, NextFunction, RequestHandler } from "express";

export const validateDto = (dtoClass: any): RequestHandler => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const dtoObject = plainToClass(dtoClass, req.body);
      const errors = await validate(dtoObject);

      if (errors.length > 0) {
        const errorMessages = errors
          .map((error) => Object.values(error.constraints || {}))
          .flat();

        res.status(400).json({
          status: "error",
          message: "Error de validación",
          errors: errorMessages,
        });
        return;
      }

      req.body = dtoObject;
      next();
    } catch (error) {
      next(error);
    }
  };
};
