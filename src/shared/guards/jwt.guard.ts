import jwt, { JwtPayload } from 'jsonwebtoken';
import { supabaseObject } from '../../services/supabase';
import { Request, Response, NextFunction } from 'express';

export interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

export const verifyToken = (req: CustomRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    res.status(401).json({ message: 'Token no proporcionado' });
    return;
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Token no válido' });
    return;
  }

  try {
    const decoded = supabaseObject.auth.getUser(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Token inválido o expirado' });
  }
};