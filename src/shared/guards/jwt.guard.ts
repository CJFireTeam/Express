import jwt, { JwtPayload } from "jsonwebtoken";
import { supabaseObject } from "../../services/supabase";
import { Request, Response, NextFunction } from "express";

export interface CustomRequest extends Request {
  user?: any; // Cambiamos el tipo para manejar la respuesta de Supabase
}

export const verifyToken = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      res.status(401).json({ message: "Token no proporcionado" });
      return;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Token no válido" });
      return;
    }

    const {
      data: { user },
      error,
    } = await supabaseObject.auth.getUser(token);

    if (error) {
      res
        .status(403)
        .json({ message: "Token inválido o expirado", error: error.message });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ message: "Error al verificar el token", error });
  }
};
