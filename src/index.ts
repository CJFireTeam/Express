// import express, { Request, Response, NextFunction,Application } from "express";
// import dotenv from "dotenv";

import { Boostrap } from "./config/Boostrap";

// app.get("/", (req: Request, res: Response) => {
//   res.send({ message: "¡Hola mundo con Node.js, Express y TypeScript!" });
// });

// // Middleware para manejo de errores
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.error(err);
//   res.status(500).send({ error: "Algo salió mal" });
// });

// // Levantar el servidor




function Power() {
  new Boostrap().Start();
}

Power();