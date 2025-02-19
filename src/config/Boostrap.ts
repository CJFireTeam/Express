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

    public Inject(routes: any[]) {
        routes.forEach(route => {
            this.app.use(route.app);
            console.log(route.app);
        })
        // this.app.use(routes);
    }

    public Start() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
    }
}