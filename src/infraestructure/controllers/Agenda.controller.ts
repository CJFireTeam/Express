import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabaseObject } from "../../services/supabase";
import baseController from "../../shared/base.controller";
import { Request, Response, NextFunction } from "express";
import { LoginDto } from '../controllers/dto/Login.dto';
import { CustomRequest } from "../../shared/guards/jwt.guard";
import AgendaApplication from "../../application/agenda.application";


    export default class extends baseController {
        private application: AgendaApplication;
        
        constructor() {
            super();
            this.application = new AgendaApplication(this.service);
        }
        public getAgenda = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
            try {
                return res.status(200).json({
                    status: 'success',
                    message: 'Obtencion de agenda exitoso',
                    user: this.application.getOne(1)
                });
                    
            } catch (error) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Obtencion de agenda fallido',
                    error: error
                });
                    
            }

        }
    
    }