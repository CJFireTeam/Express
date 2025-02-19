import dotenv from "dotenv";
import express, { Application } from "express";
import { port } from "./env";
import morgan from 'morgan'


export class Boostrap {
    // const app = express();
    private port:number = port;
    private app: Application;
    constructor() {
        this.port = port
        this.app = express();
        this.config();
    }

    private config() {
        this.app.use(express.json());
        this.app.use(morgan('tiny'))
    }


    public Start() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
    }
}