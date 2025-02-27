import jwt, { JwtPayload } from "jsonwebtoken";
import { supabaseObject } from "../../services/supabase";
import { Request, Response, NextFunction } from "express";
import { SupabaseClient } from "@supabase/supabase-js";

export interface CustomRequest extends Request {
  user?: any; // Cambiamos el tipo para manejar la respuesta de Supabase
  supabase?: SupabaseClient<any, "public", any>;
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
    const supabase = supabaseObject;

    const { data: userData, error: userError } = await supabase.auth.getUser(token);

    if (userError || !userData?.user) {
      res.status(403).json({
        message: "Token inválido o expirado",
        error: userError?.message,
      });
      return;
    }
  supabase.auth.setSession({access_token: token, refresh_token:token});    
    req.supabase = supabase;
    req.user = userData.user;
    next();
  } catch (error) {
    res.status(403).json({ message: "Error al verificar el token", error });
  }
};
