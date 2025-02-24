import express from "express";
import AuthController from "../controllers/Auth.controller";
import { validateDto } from "../../shared/middleware/validator.middleware";
import { LoginDto } from "../controllers/dto/Login.dto";
import { verifyToken } from "../../shared/guards/jwt.guard";
import AgendaController from "../controllers/Agenda.controller";
import { CreateAgendaDto } from "../controllers/dto/Agenda.dto";

export class AgendaRoutes {
  public app: express.Router = express.Router();
  private route: string = "/agenda";
  private controller: AgendaController = new AgendaController();

  constructor() {
    this.app.get(`${this.route}`,this.controller.getAgenda);
    this.app.post(`${this.route}`, validateDto(CreateAgendaDto), this.controller.createAgenda);
  }
}
