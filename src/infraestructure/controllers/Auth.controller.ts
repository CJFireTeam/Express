import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabaseObject } from "../../services/supabase";
import baseController from "../../shared/base.controller";
import { Request, Response, NextFunction } from "express";
import { LoginDto } from '../controllers/dto/Login.dto';


/* export default class extends baseController {
    

        public login = async (request: Request, response: Response, next: NextFunction): Promise<Response<any> | Response<any, Record<string, any>>> => {
            return response.status(500).send(this.service.auth.signUp({email, password}));
            
    }
} */

export default class extends baseController {
    public login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { email, password } = req.body as LoginDto;
            const result = await this.service.auth.signInWithPassword({ email, password });
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}