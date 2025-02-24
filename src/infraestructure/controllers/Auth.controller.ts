import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabaseObject } from "../../services/supabase";
import baseController from "../../shared/base.controller";
import { Request, Response, NextFunction } from "express";
import { LoginDto } from '../controllers/dto/Login.dto';
import { CustomRequest } from "../../shared/guards/jwt.guard";


/* export default class extends baseController {
    

        public login = async (request: Request, response: Response, next: NextFunction): Promise<Response<any> | Response<any, Record<string, any>>> => {
            return response.status(500).send(this.service.auth.signUp({email, password}));
            
    }
} */

    export default class extends baseController {
        public login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const { email, password } = req.body;
                
                const { data, error } = await this.service.auth.signInWithPassword({
                    email,
                    password
                });
    
                if (error) {
                    res.status(400).json({ 
                        status: 'error',
                        message: 'Error en la autenticación',
                        error: error.message 
                    });
                    return;
                }
    
                res.status(200).json({
                    status: 'success',
                    message: 'Login exitoso',
                    token: data.session?.access_token,
                    user: data.user
                });
            } catch (error) {
                next(error);
            }
        }
    
        // Endpoint protegido de ejemplo
        public profile = async (req: CustomRequest, res: Response): Promise<void> => {
            res.status(200).json({
                status: 'success',
                user: req.user
            });
        }
    }