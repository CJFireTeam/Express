import dotenv from "dotenv";


dotenv.config();
export const port:number = Number(process.env.PORT) || 3000;
export const SUPABASE_URL:string = process.env.SUPABASE_URL || ''; 
export const SUPABASE_KEY:string = process.env.SUPABASE_APIKEY  || '';