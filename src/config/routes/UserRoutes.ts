import express, { Request, Response } from "express";

export class UserRoutes {
  public app: express.Router = express.Router();
  private route: string = "/users";

  constructor() {
    // Crear usuario
    this.app.post(`${this.route}`, this.createUser);
    // Listar todos los usuarios
    this.app.get(`${this.route}`, this.getUsers);
    // Obtener un usuario por ID
    this.app.get(`${this.route}/:id`, this.getUserById);
    // Actualizar usuario por ID
    this.app.put(`${this.route}/:id`, this.updateUser);
    // Eliminar usuario por ID
    this.app.delete(`${this.route}/:id`, this.deleteUser);
  }

  private createUser(req: Request, res: Response): void {
    // Lógica para crear un usuario
    res.status(201).json({ message: "Usuario creado correctamente" });
  }

  private getUsers(req: Request, res: Response): void {
    // Lógica para listar usuarios
    res.status(200).json({ message: "Listado de usuarios" });
  }

  private getUserById(req: Request, res: Response): void {
    // Lógica para obtener un usuario en específico
    const { id } = req.params;
    res.status(200).json({ message: `Detalles del usuario con id ${id}` });
  }

  private updateUser(req: Request, res: Response): void {
    // Lógica para actualizar un usuario
    const { id } = req.params;
    res.status(200).json({ message: `Usuario con id ${id} actualizado` });
  }

  private deleteUser(req: Request, res: Response): void {
    // Lógica para eliminar un usuario
    const { id } = req.params;
    res.status(200).json({ message: `Usuario con id ${id} eliminado` });
  }
}
