import express from "express";
import AuthController from "../controllers/Auth.controller";
import { validateDto } from "../../shared/middleware/validator.middleware";
import { LoginDto } from "../controllers/dto/Login.dto";

export class AuthRoutes {
  public app: express.Router = express.Router();
  private route: string = "/auth";
  private controller: AuthController = new AuthController();

  constructor() {

    this.app.post(`${this.route}/login`,validateDto(LoginDto),this.controller.login);
    this.app.get(`${this.route}/me`, this.profile);
  }
}
