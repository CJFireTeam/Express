import dotenv from "dotenv";


dotenv.config();
export const port:number = Number(process.env.PORT) || 3000;
