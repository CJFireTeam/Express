import express, { Request, Response, NextFunction } from "express";
import AuthController from "../controllers/Auth.controller";

export class AuthRoutes {
  public app: express.Router = express.Router();
  private route: string = "/auth";
  private controller: AuthController = new AuthController()
  constructor() {
    // // Ruta para el registro de usuarios
    // this.app.post(`${this.route}/register`, this.register);
    // Ruta para el inicio de sesión
    this.app.post(`${this.route}/login`, this.controller.login);
    // // Ruta protegida para obtener perfil (requiere autenticación)
    // this.app.get(`${this.route}/profile`, this.authenticate, this.profile);
  }
}
