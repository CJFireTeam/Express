import express, { Request, Response, NextFunction } from "express";

export class AuthRoutes {
  public app: express.Router = express.Router();
  private route: string = "/auth";

  constructor() {
    // Ruta para el registro de usuarios
    this.app.post(`${this.route}/register`, this.register);
    // Ruta para el inicio de sesión
    this.app.post(`${this.route}/login`, this.login);
    // Ruta protegida para obtener perfil (requiere autenticación)
    this.app.get(`${this.route}/profile`, this.authenticate, this.profile);
  }

  private register(req: Request, res: Response): void {
    // Lógica para registrar un usuario
    res.status(201).json({ message: "Usuario registrado correctamente" });
  }

  private login(req: Request, res: Response): void {
    // Lógica para iniciar sesión
    res.status(200).json({ message: "Inicio de sesión exitoso" });
  }

  // Middleware de autenticación (puedes implementar JWT o cualquier otra estrategia)
  private authenticate(req: Request, res: Response, next: NextFunction): void {
    const token = req.headers.authorization;
    if (token) {
      // Aquí deberías validar el token (por ejemplo, usando jsonwebtoken)
      next();
    } else {
      res.status(401).json({ message: "No autorizado" });
    }
  }

  private profile(req: Request, res: Response): void {
    // Lógica para obtener el perfil del usuario autenticado
    res.status(200).json({ message: "Perfil del usuario autenticado" });
  }
}
