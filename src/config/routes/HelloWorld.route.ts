import express from "express";

export class HelloWorldRoutes {
    
    private route: string = "/";
    private app: express.Router = express.Router();
    constructor() {
        this.app.get(`${this.route}`, (req, res) => {
            res.send({ message: "¡Hola mundo!" });
        });

    }

}