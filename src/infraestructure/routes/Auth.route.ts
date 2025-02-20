import express from "express";
import AuthController from "../controllers/Auth.controller";
import { validateDto } from "../../shared/middleware/validator.middleware";
import { LoginDto } from "../controllers/dto/Login.dto";

export class AuthRoutes {
  public app: express.Router = express.Router();
  private route: string = "/auth";
  private controller: AuthController = new AuthController();

  constructor() {
    // // Ruta para el registro de usuarios
    // this.app.post(`${this.route}/register`, this.register);
    // Ruta para el inicio de sesión
    /* this.app.post(`${this.route}/login`, this.controller.login); */
    this.app.post(`${this.route}/login`,validateDto(LoginDto),this.controller.login);
    // // Ruta protegida para obtener perfil (requiere autenticación)
    // this.app.get(`${this.route}/profile`, this.authenticate, this.profile);
  }
}
