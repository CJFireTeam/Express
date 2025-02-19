import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

// Cargar variables de entorno (si usas un archivo .env)
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get("/", (req: Request, res: Response) => {
  res.send({ message: "¡Hola mundo con Node.js, Express y TypeScript!" });
});

// Middleware para manejo de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send({ error: "Algo salió mal" });
});

// Levantar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
